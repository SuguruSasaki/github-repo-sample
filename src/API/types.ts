/**
 * Github apiからのレスポンスモデル
 */
export interface GithubResponse {
  avatar_url: string;
  bio?: string;
  blog: string;
  company?: string;
  created_at: string;
  email?: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: true;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: 3;
  public_repos: 30;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username?: string;
  type: string;
  updated_at: string;
  url: string;
}
