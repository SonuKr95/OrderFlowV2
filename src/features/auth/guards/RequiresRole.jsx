import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { AUTH_STATUS } from "../constants/authStatus";

export function RequireRole({ allowedRoles }) {
  // const { userRole, authStatus } = useSelector((state) => state.auth);
  let { userRole, authStatus } = useSelector((state) => state.auth);

  //For viewer testing only.
  if (userRole === "viewer") {
    userRole = "admin";
  }

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
