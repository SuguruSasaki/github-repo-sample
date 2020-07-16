import axios, { AxiosResponse } from "axios";
import { GithubResponse } from "./types";

const http = axios.create({
  baseURL: "https://api.github.com/",
});

http.interceptors.response.use((response: AxiosResponse<GithubResponse>) => {
  console.log(response);
  return response;
});

export const getRepositories = async (
  name: string
): Promise<AxiosResponse<GithubResponse>> => {
  const response: AxiosResponse<GithubResponse> = await http.get(
    `/users/${name}`
  );
  return response;
};
