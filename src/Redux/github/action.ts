import { REQUEST, SUCCESS, FAILED } from "./types";
import { GithubResponse } from "../../API/types";

// Actionを定義
export const GithubActions = {
  Request: (name: string) => ({
    type: REQUEST,
    payload: {
      userName: name,
    },
  }),
  Success: (response: GithubResponse) => ({
    type: SUCCESS,
    payload: {
      response,
    },
  }),
  Failed: (error: string) => ({
    type: FAILED,
    payload: {
      message: error,
    },
  }),
};

// Actionの型定義
export type GithubActionType =
  | ReturnType<typeof GithubActions.Request>
  | ReturnType<typeof GithubActions.Success>
  | ReturnType<typeof GithubActions.Failed>;
