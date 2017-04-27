import { fork } from "redux-saga/effects";

import * as auth from "./auth";

export default function* rootSaga() {
  yield [
    /*auth*/

    fork(auth.watchLoginFlow)
  ];
}
