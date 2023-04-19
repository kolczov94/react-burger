export const URL_API = "https://norma.nomoreparties.space/api/ingredients";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
}

export function getIngredientsRequest() {
  return fetch(URL_API).then(checkResponse);
}
