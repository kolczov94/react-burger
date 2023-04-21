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
