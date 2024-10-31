import { apiPaths } from "./apiPaths";
import { postData } from "./crudHandlers";
import { AxiosResponseSuccess, GetTenementsListResponse } from "./types";

export const apiHandlers = {
  tenement: {
    getTenementsList: (data: FilterObject): AxiosResponseSuccess<GetTenementsListResponse> => {
      return postData(apiPaths.tenement.getTenementsList(), {
        data,
      });
    },
    getMapMarkers: (data: FilterObject): AxiosResponseSuccess<GetTenementsListResponse> => {
      return postData(apiPaths.tenement.getTenementsList(), {
        data,
      });
    },
  },
} as const;
