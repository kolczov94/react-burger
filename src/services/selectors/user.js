export function selectorUser(state) {
  return state.user.user;
}

export function selectorUserRequest(state) {
  return state.user.userRequest;
}

export function selectorUserIsResetPassword(state) {
  return state.user.isResetPassword;
}
