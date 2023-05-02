import { getCookie, setCookie } from "./cookie";

export const URL_API = "https://norma.nomoreparties.space/api";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
}

export function getIngredientsRequest() {
  return fetch(`${URL_API}/ingredients`).then(checkResponse);
}

export function getOrderRequest(ingredients) {
  return fetch(`${URL_API}/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  }).then(checkResponse);
}

export function getLoginRequest(email, password) {
  return fetch(`${URL_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    let authToken;
    res.headers.forEach((header) => {
      if (header.indexOf("Bearer") === 0) {
        authToken = header.split("Bearer ")[1];
      }
    });
    if (authToken) {
      setCookie("token", authToken);
    }
    return checkResponse(res);
  });
}

export function getRegistrationRequest(name, email, password) {
  return fetch(`${URL_API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
}

export function getLogoutRequest(ingredients) {
  return fetch(`${URL_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  }).then(checkResponse);
}

export function getRefreshTokenRequest(ingredients) {
  return fetch(`${URL_API}/auth/token`, {
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
