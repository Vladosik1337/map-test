import { useMutation } from "@tanstack/react-query";
import { apiHandlers } from "../apiHandlers";

export const useTenementsListMutations = () => {
  const { mutate: getTenementsListMutate } = useMutation({
    mutationFn: apiHandlers.tenement.getTenementsList,
  });

  return {
    getTenementsListMutate,
  };
};
