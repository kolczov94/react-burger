import { getRefreshTokenRequest } from "./api";
import { deleteCookie, getCookie } from "./cookie";

export type TFetchAuth = <T, O = unknown>(
  userFetch: (options?: O) => Promise<T>,
  options?: O
) => Promise<T>;

export const fetchAuth: TFetchAuth = async (userFetch, options) => {
  if (!getCookie("refreshToken") || !getCookie("token")) {
    return Promise.reject("No JWT token");
  }

  const response = await userFetch(options)
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

  return await userFetch(options);
};

// type TFetchAuthProps = (
//   userFetch: (options: unknown | undefined) => Promise<Response>,
//   options: unknown | undefined
// ) => Promise<unknown>;

// export const fetchAuth: TFetchAuthProps = async (userFetch, options) => {
//   if (!getCookie("refreshToken") || !getCookie("token")) {
//     return Promise.reject("No JWT token");
//   }

//   const response = await userFetch(options ? options : {})
//     .then((data) => data)
//     .catch((err) => err);

//   if (response.success) {
//     return Promise.resolve(response);
//   }

//   const updateTokenData = await getRefreshTokenRequest()
//     .then((data) => data)
//     .catch((err) => err);

//   if (!updateTokenData.success) {
//     deleteCookie("token");
//     deleteCookie("refreshToken");
//     return Promise.reject(updateTokenData.message);
//   }

//   return await userFetch(options ? options : {});
// };
