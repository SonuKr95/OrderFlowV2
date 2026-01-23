import { Toaster } from "react-hot-toast";
import { TOAST_OPTIONS } from "./app/constants/toastOptions.js";
import RouterRoot from "./routes/RouterRoot.jsx";

function App() {
  return (
    <>
      <Toaster
        position="center"
        reverseOrder={false}
        toastOptions={TOAST_OPTIONS}
      />
      <RouterRoot />
    </>
  );
}

export default App;
