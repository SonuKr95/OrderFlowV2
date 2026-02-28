import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AUTH_STATUS } from "../constants/authStatus";
import NotFound from "../pages/NotFound";

export function GuestNotFoundRedirect() {
  const status = useSelector((state) => state.auth.status);

  if (status !== AUTH_STATUS.AUTHENTICATED) {
    return <Navigate to="/login" replace />;
  }

  return <NotFound />;
}
