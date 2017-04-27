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
        user: payload,
        loggingIn: false
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false
      };

    default:
      return state;
  }
}
