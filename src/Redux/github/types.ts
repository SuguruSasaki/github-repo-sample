// Action Type
export const REQUEST = "GITHUB/REQUEST" as const;
export const SUCCESS = "GITHUB/SUCCESS" as const;
export const FAILED = "GITHUB/FAILED" as const;

// State
export interface GithubState {
  name: string;
  repositoryUrl: string;
}
