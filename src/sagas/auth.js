import { put, take, call, fork } from "redux-saga/effects";
import { types } from "../actions/auth";
import configs from "../configs";
import Client from "../utils/Client";
import Message from "../utils/Message";
import Storage from "../utils/Storage";

function* login(payload) {
  const { data, success } = payload;
  try {
    const user = yield Client.authenticate(data);
    yield call(Storage.save, configs.token, user);
    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      payload: user
    });
    if (success) {
      yield call(success);
    }
  } catch (error) {
    yield put({
      type: actionTypes.LOGIN_FAIL
    });
    Message.error(error);
  }
}

/**
 * 监听登录的流程
 */
export function* watchLoginFlow() {
  while (true) {
    const { payload } = yield take(types.LOGIN_START);
    yield fork(login, payload);
  }
}
