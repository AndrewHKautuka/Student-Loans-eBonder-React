import { QueryClient } from "@tanstack/react-query"

import { TANSTACK_QUERY_CLIENT } from "@/config/fetch"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus:
        TANSTACK_QUERY_CLIENT.DEFAULT_REFETCH_ON_WINDOW_FOCUS,
      staleTime: TANSTACK_QUERY_CLIENT.DEFAULT_STALE_TIME,
    },
  },
})
