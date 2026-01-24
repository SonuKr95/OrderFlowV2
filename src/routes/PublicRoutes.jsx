import { Navigate } from "react-router-dom";
import { GuestOnlyRoute } from "../features/auth/guards/GuestOnlyRoute";
import LoginPage from "../features/auth/pages/LoginPage";
import { GuestNotFoundRedirect } from "../features/auth/guards/GuestNotFoundRedirect";
import Unauthorized from "../features/auth/pages/Unauthorized";

export const PublicRoutes = [
  {
    index: true,
    element: <Navigate to="/login" replace />,
  },
  {
    path: "login",
    element: (
      <GuestOnlyRoute>
        <LoginPage />
      </GuestOnlyRoute>
    ),
  },

  { path: "unauthorized", element: <Unauthorized /> },
  {
    path: "*",
    element: <GuestNotFoundRedirect />,
  },
];
