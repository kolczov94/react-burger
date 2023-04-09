import { URL_API } from "./constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
}

export function getIngredients() {
  return fetch(URL_API).then(checkResponse);
}
