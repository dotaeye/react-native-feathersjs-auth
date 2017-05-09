import { fork } from "redux-saga/effects";

import * as auth from "./auth";

export default function* rootSaga() {
  yield [
    /*auth*/

    fork(auth.watchLoginFlow),
    fork(auth.watchRegisterFlow),
    fork(auth.watchForgetPasswordFlow),
    fork(auth.watchLogoutFlow),
    fork(auth.watchVerificationCodeFlow)
  ];
}
