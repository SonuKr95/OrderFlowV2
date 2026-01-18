import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function PublicOnlyRoute({ children }) {
  const { status, role } = useSelector((state) => state.auth);

  if (status === "authenticated" && role === "admin") {
    return <Navigate to="/dashboard" replace />;
  }
  if (status === "authenticated" && role === "staff") {
    return <Navigate to="/productlist" replace />;
  }
  return children;
}
