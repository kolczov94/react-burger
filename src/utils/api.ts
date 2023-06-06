import { deleteCookie, getCookie, setCookie } from "./cookie";
import { TIngredientResponse } from "../types/ingredient";
import {
  TLoginResponse,
  TMessageResponse,
  TRegisterResponse,
  TUpdateTokenResponse,
} from "../types/auth";
import { TUserResponse, TUserUpdateResponse } from "../types/user";
import { TOrderResponse } from "../types/order";

export const BASE_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
};

const checkSuccess = (data: any) => {
  if (data && data.success) {
    return data;
  }
  return Promise.reject(data);
};

const request = <T>(endpoint: string, options?: RequestInit) => {
  return fetch(`${BASE_URL}${endpoint}`, options)
    .then<T>(checkResponse)
    .then<T>(checkSuccess);
};

export const requestAuth = async <T>(
  endpoint: string,
  options: RequestInit
) => {
  if (!getCookie("refreshToken") || !getCookie("token")) {
    return Promise.reject({ message: "No JWT token" });
  }

  try {
    return await request<T>(endpoint, options);
  } catch (error: any) {
    if (error.message === "jwt expired") {
      const refresh = await getRefreshTokenRequest();

      setCookie("token", refresh.accessToken.split("Bearer ")[1], {
        path: "/",
      });
      setCookie("refreshToken", refresh.refreshToken, { path: "/" });

      const newHeaders = new Headers(options.headers);
      newHeaders.set("Authorization", refresh.accessToken);
      options.headers = newHeaders;

      return await request<T>(endpoint, options);
    } else {
      deleteCookie("token");
      deleteCookie("refreshToken");
      return Promise.reject(error);
    }
  }
};

export const getIngredientsRequest = () =>
  request<TIngredientResponse>("/ingredients");

export const getOrderRequest = (ingredients: Array<string>) =>
  request<TOrderResponse>("/orders", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  });

export const getUserRequest = () =>
  requestAuth<TUserResponse>("/auth/user", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  });

export const getUserUpdateRequest = (data: {
  name: string;
  email: string;
  password: string;
}) =>
  requestAuth<TUserUpdateResponse>("/auth/user", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    body: JSON.stringify(data),
  });

export const getLoginRequest = (data: { email: string; password: string }) =>
  request<TLoginResponse>("/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => {
    setCookie("token", data.accessToken.split("Bearer ")[1], { path: "/" });
    setCookie("refreshToken", data.refreshToken, { path: "/" });
    return data;
  });

export const getRegistrationRequest = (data: {
  name: string;
  email: string;
  password: string;
}) =>
  request<TRegisterResponse>("/auth/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => {
    setCookie("token", data.accessToken.split("Bearer ")[1], { path: "/" });
    setCookie("refreshToken", data.refreshToken, { path: "/" });
    return data;
  });

export const getRefreshTokenRequest = () =>
  request<TUpdateTokenResponse>("/auth/token", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ tokena: getCookie("refreshToken") }),
  }).then((data) => {
    setCookie("token", data.accessToken.split("Bearer ")[1], { path: "/" });
    setCookie("refreshToken", data.refreshToken, { path: "/" });
    return data;
  });

export const getForgotPasswordRequest = (email: string) =>
  request<TMessageResponse>("/password-reset", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

export const getResetPasswordRequest = (data: {
  password: string;
  token: string;
}) =>
  request<TMessageResponse>("/password-reset/reset", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const getLogoutRequest = () =>
  request<TMessageResponse>("/auth/logout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  }).then((data) => {
    deleteCookie("token");
    deleteCookie("refreshToken");
    return data;
  });
