import { GithubState, REQUEST, SUCCESS, FAILED } from "./types";
import { GithubActionType } from "./action";
import { Reducer } from "react";

const initialState: GithubState = {
  name: "",
  repositoryUrl: "",
};

const reducer: Reducer<GithubState, GithubActionType> = (
  state: GithubState = initialState,
  action: GithubActionType
) => {
  console.log(action);
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        name: action.payload.response.name,
      };

    case FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
