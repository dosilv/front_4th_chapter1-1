import { timeConverter } from "../shared";

const Post = (data) => {
  const { id, createdBy, createdAt, content, isLiked } = data;

  return `<div id="post" class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">${createdBy}</p>
                  <p class="text-sm text-gray-500">${timeConverter(new Date().getTime() - createdAt)}</p>
                </div>
              </div>
              <p>${content}</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button id=${`like-button-${id}`}>${isLiked ? "❤️ " : ""}좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>`;
};

export default Post;
