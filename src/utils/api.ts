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

export const URL_API = "https://norma.nomoreparties.space/api";

const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
};

export const getIngredientsRequest = () => {
  return fetch(`${URL_API}/ingredients`).then(
    checkResponse<TIngredientResponse>
  );
};

export const getOrderRequest = (ingredients: Array<string>) => {
  return fetch(`${URL_API}/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  }).then(checkResponse<TOrderResponse>);
};

export const getUserRequest = () => {
  return fetch(`${URL_API}/auth/user`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  }).then(checkResponse<TUserResponse>);
};

export const getUserUpdateRequest = (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return fetch(`${URL_API}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    body: JSON.stringify(data),
  }).then(checkResponse<TUserUpdateResponse>);
};

export const getLoginRequest = (data: { email: string; password: string }) => {
  return fetch(`${URL_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(checkResponse<TLoginResponse>)
    .then((data) => {
      if (data.success) {
        setCookie("token", data.accessToken.split("Bearer ")[1], { path: "/" });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
      }
      return data;
    });
};

export const getRegistrationRequest = (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return fetch(`${URL_API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(checkResponse<TRegisterResponse>)
    .then((data) => {
      if (data.success) {
        setCookie("token", data.accessToken.split("Bearer ")[1], { path: "/" });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
      }
      return data;
    });
};

export const getRefreshTokenRequest = () => {
  return fetch(`${URL_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  })
    .then(checkResponse<TUpdateTokenResponse>)
    .then((data) => {
      if (data.success) {
        setCookie("token", data.accessToken.split("Bearer ")[1], { path: "/" });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
      }
      return data;
    });
};

export const getForgotPasswordRequest = (email: string) => {
  return fetch(`${URL_API}/password-reset`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(checkResponse<TMessageResponse>);
};

export const getResetPasswordRequest = (data: {
  password: string;
  token: string;
}) => {
  return fetch(`${URL_API}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse<TMessageResponse>);
};

export const getLogoutRequest = () => {
  return fetch(`${URL_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  })
    .then(checkResponse<TMessageResponse>)
    .then((data) => {
      if (data.success) {
        deleteCookie("token");
        deleteCookie("refreshToken");
        return data;
      }
    });
};
