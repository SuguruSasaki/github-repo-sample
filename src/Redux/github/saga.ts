import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST } from "./types";
import { GithubActionType, GithubActions } from "./action";
import { getRepositories } from "../../API/APIClient";

function* githubSaga() {
  yield takeEvery(REQUEST, fetch);
}

function* fetch(action: GithubActionType) {
  if (action.type !== REQUEST) return;
  const response = yield call(getRepositories, action.payload.userName);
  yield put(GithubActions.Success(response));
}

export default githubSaga;
