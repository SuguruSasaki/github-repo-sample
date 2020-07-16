import { NAVIGATE_TO_INDEX, NAVIGATE_TO_DETAIL } from "./types";

export const RouterActions = {
  Index: () => ({
    type: NAVIGATE_TO_INDEX,
  }),
  Detail: () => ({
    type: NAVIGATE_TO_DETAIL,
  }),
};

export type RouterActionType =
  | ReturnType<typeof RouterActions.Index>
  | ReturnType<typeof RouterActions.Detail>;
