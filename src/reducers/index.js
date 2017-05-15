import { combineReducers } from "redux";
import auth, { initialAuthState } from "./auth";
import socket, { initialSocketState } from "./socket";
import nav from "./nav";
import recycleState from "redux-recycle";

const RESET_STATE = "RESET_STATE";

export default (reducers = combineReducers({
  auth: recycleState(auth, [RESET_STATE], initialAuthState),
  socket: recycleState(socket, [RESET_STATE], initialSocketState),
  nav
}));
