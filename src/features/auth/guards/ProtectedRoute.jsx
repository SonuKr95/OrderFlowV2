// import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
/*
import { Navigate, Outlet } from "react-router";
import { useFetchStoredAuth } from "./useFetchStoredAuth";

function ProtectedRoute({ allowedRoles }) {
  const { data: auth, isLoading } = useFetchStoredAuth();
  console.log("ProtectedRoute rendered");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(auth.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  // console.log("aac");
  // console.log(auth);
  // Not logged in
  // if (status !== "authenticated") {
  //   return <Navigate to="/" replace />;
  // }

  // Role-based restriction
  // if (allowedRoles && !allowedRoles.includes(auth.role)) {
  //   return <Navigate to="/unauthorized" replace />;
  // }
  // if (allowedRoles && allowedRoles.includes(auth.role)) {
  //   return <Navigate to="productlist" replace />;
  // }

  return <Outlet />;
}
export default ProtectedRoute;

import { Navigate, Outlet } from "react-router";
import { useFetchStoredAuth } from "./useFetchStoredAuth";

function ProtectedRoute({ allowedRoles }) {
  const { data: auth, isLoading } = useFetchStoredAuth();
  console.log("ProtectedRoute rendered");
  
  console.log("ProtectedRoute rendered", auth);
  
  if (isLoading) return <div>Loading...</div>;

  if (!auth) {
    return <Navigate to="/" replace />;
  }
  
  if (allowedRoles && !allowedRoles.includes(auth.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;

*/
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useFetchStoredAuth } from "../session/useFetchStoredAuth";
import { fetchLoginFromBrowser } from "../session/fetchLoginFromBrowser";

function ProtectedRoute() {
  const authenticatedStatus = useSelector((state) => state.auth.status);
  console.log("ProtectedRoute rendered");

  if (authenticatedStatus === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
