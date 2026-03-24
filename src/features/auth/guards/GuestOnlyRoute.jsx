import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { AUTH_STATUS } from "../constants/authStatus";
import { ROLE_REDIRECT_MAP } from "../constants/roleRedirectMap";

export function GuestOnlyRoute({ children }) {
  const { authStatus, userRole } = useSelector((state) => state.auth);
  const location = useLocation();

  if (authStatus !== AUTH_STATUS.AUTHENTICATED) {
    return children;
  }

  if (!userRole) {
    return <Navigate to="/unauthorized" replace />;
  }
  // 3. If they ARE logged in, but just refreshed a page they already have access to,
  // do NOT redirect them. Only redirect if they are trying to access "/" or "/login".
  const isAtGuestEntry =
    location.pathname === "/" || location.pathname === "/login";
  if (isAtGuestEntry) {
    const defaultPath = ROLE_REDIRECT_MAP[userRole] ?? "/";
    return <Navigate to={defaultPath} replace />;
  }

  // return <Navigate to={ROLE_REDIRECT_MAP[userRole] ?? "/"} replace />;
}
