import { Navigate } from "react-router-dom";
import { GuestOnlyRoute } from "../features/auth/guards/GuestOnlyRoute";
import LoginPage from "../features/auth/pages/LoginPage";

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
];
