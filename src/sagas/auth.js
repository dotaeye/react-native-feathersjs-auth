import { put, take, call, fork } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import { types } from "../actions/auth";
import { STORAGE } from "../configs";
import Client from "../utils/Client";
import Message from "../utils/Message";
import Storage from "../utils/Storage";

function* login(payload) {
  const { data, success, throwError } = payload;
  try {
    const token = yield Client.authenticate(data);
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: token
    });
    yield put(NavigationActions.navigate({ routeName: "Home" }));
  } catch (error) {
    if (throwError) {
      throw error;
    } else {
      yield put({
        type: types.LOGIN_FAIL
      });
      Message.error(error);
    }
  }
}

function* logout() {
  yield Client.logout();
  yield put({ type: "RESET_STATE" });
  yield put(NavigationActions.navigate({ routeName: "Main" }));
}

function* verificationCode(payload) {
  try {
    const code = yield Client.service("verification-code").create(payload);
    console.log(code);
  } catch (error) {
    Message.error(error);
  }
}

function* register({ data }) {
  try {
    const user = yield Client.service("users").create(data);
    yield login({
      throwError: true,
      data: {
        phone: user.phone,
        password: data.password,
        strategy: "local",
        type: "password"
      }
    });
    yield put({
      type: types.REGISTER_SUCCESS
    });
  } catch (error) {
    yield put({
      type: types.REGISTER_FAIL
    });
    Message.error(error);
  }
}

function* forgetPassword({ data }) {
  try {
    const result = yield Client.service("users").patch(null, data);
    yield put({
      type: types.FORGET_PASSWORD_SUCCESS
    });
    Message.success("重置密码成功");
    yield put(NavigationActions.navigate({ routeName: "Login" }));
  } catch (error) {
    if (fail) {
      yield call(fail, error);
    }
    yield put({
      type: types.FORGET_PASSWORD_FAIL
    });
    Message.error(error);
  }
}

function* changePassword({ success, data }) {
  try {
    const result = yield Client.service("users").patch(null, data);
    yield put({
      type: types.CHANGE_PASSWORD_SUCCESS
    });
    Message.success("重置密码成功");
    yield put(NavigationActions.back());
  } catch (error) {
    yield put({
      type: types.CHANGE_PASSWORD_FAIL
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

export function* watchLogoutFlow() {
  while (true) {
    const { payload } = yield take(types.LOGOUT_START);
    yield fork(logout, payload);
  }
}

export function* watchVerificationCodeFlow() {
  while (true) {
    const { payload } = yield take(types.VERIFICATION_CODE_START);
    yield fork(verificationCode, payload);
  }
}

export function* watchRegisterFlow() {
  while (true) {
    const { payload } = yield take(types.REGISTER_START);
    yield fork(register, payload);
  }
}

export function* watchForgetPasswordFlow() {
  while (true) {
    const { payload } = yield take(types.FORGET_PASSWORD_START);
    yield fork(forgetPassword, payload);
  }
}

export function* watchChangePasswordFlow() {
  while (true) {
    const { payload } = yield take(types.CHANGE_PASSWORD_START);
    yield fork(changePassword, payload);
  }
}
