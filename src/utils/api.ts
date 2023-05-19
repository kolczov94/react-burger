import { deleteCookie, getCookie, setCookie } from "./cookie";

export const URL_API = "https://norma.nomoreparties.space/api";

function checkResponse(res: any) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err: any) => Promise.reject(err));
}

export function getIngredientsRequest() {
  return fetch(`${URL_API}/ingredients`).then(checkResponse);
}

export function getOrderRequest(ingredients: Array<string>) {
  return fetch(`${URL_API}/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  }).then(checkResponse);
}

export function getUserRequest() {
  return fetch(`${URL_API}/auth/user`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  }).then(checkResponse);
}

export function getUserUpdateRequest({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  return fetch(`${URL_API}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
}

export function getLoginRequest(email: string, password: string) {
  return fetch(`${URL_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.success) {
        setCookie("token", data.accessToken.split("Bearer ")[1], { path: "/" });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
      }
      return data;
    });
}

export function getRegistrationRequest(
  name: string,
  email: string,
  password: string
) {
  return fetch(`${URL_API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.success) {
        setCookie("token", data.accessToken.split("Bearer ")[1], { path: "/" });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
      }
      return data;
    });
}

export function getRefreshTokenRequest() {
  return fetch(`${URL_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.success) {
        setCookie("token", data.accessToken.split("Bearer ")[1], { path: "/" });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
      }
      return data;
    });
}

export function getForgotPasswordRequest(email: string) {
  return fetch(`${URL_API}/password-reset`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(checkResponse);
}

export function getResetPasswordRequest(password: string, token: string) {
  return fetch(`${URL_API}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  }).then(checkResponse);
}

export function getLogoutRequest() {
  return fetch(`${URL_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.success) {
        deleteCookie("token");
        deleteCookie("refreshToken");
        return data;
      }
    });
}
