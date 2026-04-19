import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { AUTH_STATUS } from "../constants/authStatus";

export function RequireRole({ allowedRoles }) {
  let { userRole, authStatus } = useSelector((state) => state.auth);

  if (authStatus === AUTH_STATUS.LOADING) {
    return null;
  }

  if (authStatus !== AUTH_STATUS.AUTHENTICATED) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
