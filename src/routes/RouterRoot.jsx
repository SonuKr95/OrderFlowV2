import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { PublicRoutes } from "./PublicRoutes";
import AuthGate from "../features/auth/guards/AuthGate";
import { Routes } from "./Routes";

const UnauthorisedPage = lazy(
  () => import("../features/auth/pages/Unauthorized"),
);
const NotFoundPage = lazy(() => import("../features/auth/pages/NotFound"));

function RouterRoot() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthGate />,
      children: [
        ...PublicRoutes,
        ...Routes,
        {
          path: "unauthorized",
          element: <UnauthorisedPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default RouterRoot;
