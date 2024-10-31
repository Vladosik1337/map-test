import { useMutation } from "@tanstack/react-query";
import { apiHandlers } from "../apiHandlers";

export const useMapMarkersMutations = () => {
  const { mutate: getMapMarkersMutate } = useMutation({
    mutationFn: apiHandlers.tenement.getMapMarkers,
  });

  return {
    getMapMarkersMutate,
  };
};
