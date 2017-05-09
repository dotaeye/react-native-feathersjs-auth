import { types } from "../actions/auth";

export const initialAuthState = {
  loaded: false
};

export default function user(state = initialAuthState, action = {}) {
  const { payload } = action;
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        loggingIn: false
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false
      };
    case types.REGISTER_START:
      return {
        ...state,
        registering: true
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        registering: false
      };
    case types.FORGET_PASSWORD_START:
      return {
        ...state,
        forgetting: true
      };
    case types.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        forgetting: false
      };
    case types.FORGET_PASSWORD_FAIL:
      return {
        ...state,
        forgetting: false
      };
    default:
      return state;
  }
}
