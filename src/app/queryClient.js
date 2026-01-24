import { QueryClient } from "@tanstack/react-query";
import { QueryCache } from "@tanstack/react-query";
import { setAuthUser } from "./store/slices/authSlice";
import store from "./store";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: (data, query) => {
      if (query.meta?.dispatchSavedLogin) {
        const savedLogin = query.meta.dispatchSavedLogin(data);
        store.dispatch(setAuthUser(savedLogin));
      }
    },
  }),
});
