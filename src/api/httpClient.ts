import axios, { AxiosRequestConfig } from "axios";

import { AxiosResponseSuccess } from "./types";

function createHttpClient() {
  const baseUrl = "https://api.lystio.co/";
  return axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const httpClient = createHttpClient();

export async function makeHttpRequest<SuccessPayload>(
  config: AxiosRequestConfig
): AxiosResponseSuccess<SuccessPayload> {
  return httpClient.request<SuccessPayload>({
    ...config,
  });
}
