import { QueryClient } from "@tanstack/react-query";
import { QueryCache } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // onSuccess: async (data, query) => {
    //   if (query.meta?.retrieveSession && data) {
    //     const userRole = await query.meta.getUserRole();
    //     console.log(userRole);
    //     store.dispatch(
    //       setAuthUser({
    //         userRole,
    //       }),
    //     );
    //   }
    // },
  }),
});
