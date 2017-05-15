export const types = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",

  LOGOUT_START: "LOGOUT_START",

  REGISTER_START: "REGISTER_START",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",

  SET_PASSWORD_START: "SET_PASSWORD_START",
  SET_PASSWORD_SUCCESS: "SET_PASSWORD_SUCCESS",
  SET_PASSWORD_FAIL: "SET_PASSWORD_FAIL",

  CHANGE_PASSWORD_START: "CHANGE_PASSWORD_START",
  CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
  CHANGE_PASSWORD_FAIL: "CHANGE_PASSWORD_FAIL",

  FORGET_PASSWORD_START: "FORGET_PASSWORD_START",
  FORGET_PASSWORD_SUCCESS: "FORGET_PASSWORD_SUCCESS",
  FORGET_PASSWORD_FAIL: "FORGET_PASSWORD_FAIL",

  VERIFICATION_CODE_START: "VERIFICATION_CODE_START"
};

export function register(payload) {
  return {
    type: types.REGISTER_START,
    payload
  };
}

export function verificationCode(payload) {
  return {
    type: types.VERIFICATION_CODE_START,
    payload
  };
}

export function login(payload) {
  return {
    type: types.LOGIN_START,
    payload
  };
}

export function logout(payload) {
  return {
    type: types.LOGOUT_START,
    payload
  };
}

export function forgetPassword(payload) {
  return {
    type: types.FORGET_PASSWORD_START,
    payload
  };
}

export function changePassword(payload) {
  return {
    type: types.CHANGE_PASSWORD_START,
    payload
  };
}
