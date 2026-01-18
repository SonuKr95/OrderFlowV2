import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { PublicRoutes } from "./PublicRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { StaffRoutes } from "./StaffRoutes";
import ProtectedRoute from "../features/auth/guards/ProtectedRoute";
import AuthGate from "../features/auth/guards/AuthGate";
const roleRoutes = {
  admin: AdminRoutes,
  staff: StaffRoutes,
};

function RouterRoot() {
  const role = useSelector((state) => state.auth.role);
  const router = createBrowserRouter([
    {
      element: <AuthGate />,
      children: [
        ...PublicRoutes,
        {
          element: <ProtectedRoute />,
          children: [...(roleRoutes[role] || [])],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default RouterRoot;
