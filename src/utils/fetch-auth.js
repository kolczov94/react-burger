import { getRefreshTokenRequest } from "./api";
import { deleteCookie, getCookie } from "./cookie";

export async function fetchAuth(userFetch, payload) {
  if (!getCookie("refreshToken") || !getCookie("token")) {
    return Promise.reject("No JWT token");
  }

  const response = await userFetch(payload ? payload : {})
    .then((data) => data)
    .catch((err) => err);

  if (response.success) {
    return Promise.resolve(response);
  }

  const updateTokenData = await getRefreshTokenRequest()
    .then((data) => data)
    .catch((err) => err);

  if (!updateTokenData.success) {
    deleteCookie("token");
    deleteCookie("refreshToken");
    return Promise.reject(updateTokenData.message);
  }

  return await userFetch();
}
