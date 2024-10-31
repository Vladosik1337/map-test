import { AxiosResponse } from "axios";

export type AxiosResponseSuccess<Data> = Promise<AxiosResponse<Data>>;

export interface GetTenementsListResponse {
  padding: TenementPadding;
  res: Tenement[];
}
