import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
  mutationCache: new MutationCache({}),
  queryCache: new QueryCache({}),
});
