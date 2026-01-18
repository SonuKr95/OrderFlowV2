import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./app/queryClient";
import { ListProvider } from "./app/context/listContext.jsx";
import { EditModalProvider } from "./app/context/editModalContext.jsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store/store.js";
import RouterRoot from "./routes/RouterRoot.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Toaster
            position="center"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                fontSize: "20px",
              },
            }}
          />
          <EditModalProvider>
            <ListProvider>
              <RouterRoot />
            </ListProvider>
          </EditModalProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
