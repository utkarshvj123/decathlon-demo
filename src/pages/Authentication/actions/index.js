import { LOGIN_USER, LOGOUT_USER } from "./actionType";

export const loginUser = (payload) => {
  return {
    type: `${LOGIN_USER}_SUCCESS`,
    payload,
  };
};

export const loginUserFailed = (payload) => ({
  type: `${LOGIN_USER}_FAILED`,
  payload,
});

export const logoutUser = (payload) => ({
  type: `${LOGOUT_USER}`,
  payload,
});
