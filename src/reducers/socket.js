import { types } from "../actions/socket";

export const initSocketState = {
  isConnecting: false
};

export default function socket(state = initSocketState, action = {}) {
  switch (action.type) {
    case types.CONNECT:
      return {
        isConnecting: true
      };

    case types.DISCONNECT:
      return {
        isConnecting: false
      };

    default:
      return state;
  }
}
