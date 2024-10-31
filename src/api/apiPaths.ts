export const apiPaths = {
  tenement: {
    getTenementsList: () => "/tenement/search",
    getMapMarkers: () => "/tenement/search/map",
  },
} as const;
