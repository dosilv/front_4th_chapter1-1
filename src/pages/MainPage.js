import Store from "../features/Store";
import userService from "../features/UserService";
import { Header, Footer, Post } from "../widgets";

const MainPage = () => {
  const { view: headerView, init: initHeader } = Header();

  const store = Store.getInstance();
  const postList = store.getState().postList ?? [];

  const view = `
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
       ${headerView}
       
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4" id="post-area">

          ${[...postList]
            ?.reverse()
            .map((data) => Post(data))
            .join("")}
           
          </div>
        </main>
        ${Footer()}
      </div>
    </div>
  `;

  const init = () => {
    initHeader();

    const postArea = document.querySelector("#post-area");
    const textarea = document.querySelector("textarea");
    const submitButton = document.querySelector("button");

    textarea.addEventListener("click", () => {
      if (userService.getUser()?.username) return;
      alert("로그인 후 작성할 수 있습니다.");
    });

    submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      store.setState((prev) => {
        const postList = prev.postList ?? [];
        return {
          ...prev,
          postList: [
            ...postList,
            {
              id: postList.length + 1,
              createdBy: userService.getUser().username,
              content: textarea.value,
              createdAt: new Date().getTime(),
              isLiked: false,
            },
          ],
        };
      });

      textarea.value = "";
    });

    postArea.addEventListener("click", (e) => {
      const { id } = e.target;

      if (!id.startsWith("like-button")) return;

      const targetId = Number(id.split("-").pop());

      store.setState((prev) => {
        const postList = prev.postList ?? [];
        return {
          ...prev,
          postList: postList.map((post) =>
            post.id === targetId
              ? {
                  ...post,
                  isLiked: !post.isLiked,
                }
              : post,
          ),
        };
      });
    });

    store.subscribe((state) => {
      postArea.innerHTML = `${[...state.postList]
        ?.reverse()
        .map((data) => Post(data))
        .join("")}`;
    });
  };

  return { view, init };
};

export default MainPage;
