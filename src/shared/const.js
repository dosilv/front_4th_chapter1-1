export const BASE_URL = window.location.origin;

export const USER_KEY = "user";

export const InputName = {
  PASSWORD: "password",
  USERNAME: "username",
  EMAIL: "email",
  BIO: "bio",
};

export const MIN_IN_MILLISEC = 60 * 1000;

export const POST_LIST = [
  {
    id: 1,
    createdBy: "정수연",
    content: "새로 나온 영화 재미있대요. 같이 보러 갈 사람?",
    createdAt: new Date().getTime() - MIN_IN_MILLISEC * 120,
    isLiked: false,
  },
  {
    id: 2,
    createdBy: "박민수",
    content: "주말에 등산 가실 분 계신가요? 함께 가요!",
    createdAt: new Date().getTime() - MIN_IN_MILLISEC * 60,
    isLiked: false,
  },
  {
    id: 3,
    createdBy: "이영희",
    content: "오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",
    createdAt: new Date().getTime() - MIN_IN_MILLISEC * 30,
    isLiked: false,
  },
  {
    id: 4,
    createdBy: "김철수",
    content: "새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",
    createdAt: new Date().getTime() - MIN_IN_MILLISEC * 15,
    isLiked: false,
  },
  {
    id: 5,
    createdBy: "홍길동",
    content: "오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",
    createdAt: new Date().getTime() - MIN_IN_MILLISEC * 5,
    isLiked: false,
  },
];
