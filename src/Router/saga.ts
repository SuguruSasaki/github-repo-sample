import { takeEvery } from "redux-saga/effects";
import { NAVIGATE_TO_INDEX, NAVIGATE_TO_DETAIL } from "./types";
import { RouterActionType } from "./action";
import history from "./index";

export default function* routerSaga() {
  yield takeEvery(NAVIGATE_TO_INDEX, navigateTo);
  yield takeEvery(NAVIGATE_TO_DETAIL, navigateTo);
}

function navigateTo(action: RouterActionType) {
  switch (action.type) {
    case NAVIGATE_TO_INDEX:
      history.push("/");
      break;

    case NAVIGATE_TO_DETAIL:
      history.push(`/detail`);
      break;

    default:
      break;
  }
}
