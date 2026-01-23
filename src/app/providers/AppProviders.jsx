import { Provider as ReduxProvider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import store from "../store";

export function AppProviders({ children }) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReduxProvider>
  );
}
