export const TAB_MENU_DEFAULT = "bun";
export const TAB_MENU_LIST = [
  {
    name: "bun",
    title: "Булки",
  },
  {
    name: "sauce",
    title: "Соусы",
  },
  {
    name: "main",
    title: "Начинки",
  },
];

export const ROUTES = {
  MAIN: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  PROFILE: "/profile",
  SINGLE_PROFILE_ORDERS: "/profile/orders/:id",
  PROFILE_ORDERS: "orders",
  SINGLE_INGREDIENT: "/ingredients/:id",
  FEED: "/feed",
  SINGLE_FEED: "/feed/:id",
  ALL: "*",
};
