import { all, fork } from "redux-saga/effects";
import routerSaga from "../Router/saga";
import githubSaga from "./github/saga";

export default function* rootSaga() {
  yield all([fork(routerSaga), fork(githubSaga)]);
}
