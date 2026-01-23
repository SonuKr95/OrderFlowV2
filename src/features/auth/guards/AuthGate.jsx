import { useFetchStoredAuth } from "../session/useFetchStoredAuth";
import { Outlet } from "react-router-dom";

function AuthGate() {
  const { isPending, isFetching } = useFetchStoredAuth();
  if (isFetching || isPending) {
    return <div style={{ color: "red" }}>AUTH LOADING</div>;
  }
  return <Outlet />;
}

//
export default AuthGate;
