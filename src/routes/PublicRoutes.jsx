import { Navigate } from "react-router-dom";
import { PublicOnlyRoute } from "../features/auth/guards/PublicOnlyRoutes";
import LoginPage from "../features/auth/pages/LoginPage";
import Unauthorized from "../features/auth/pages/Unauthorized";

export const PublicRoutes = [
  {
    index: true,
    element: <Navigate to="/login" replace />,
  },
  {
    path: "login",
    element: (
      <PublicOnlyRoute>
        <LoginPage />
      </PublicOnlyRoute>
    ),
  },

  { path: "unauthorized", element: <Unauthorized /> },
  {
    path: "*",
    element: <Unauthorized />,
  },
];
