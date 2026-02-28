import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AUTH_STATUS } from "../constants/authStatus";
import { ROLE_REDIRECT_MAP } from "../constants/roleRedirectMap";

export function GuestOnlyRoute({ children }) {
  const { authStatus, userRole } = useSelector((state) => state.auth);

  if (authStatus !== AUTH_STATUS.AUTHENTICATED) {
    return children;
  }

  if (!userRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Navigate to={ROLE_REDIRECT_MAP[userRole] ?? "/"} replace />;
}
