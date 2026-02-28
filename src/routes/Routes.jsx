import { Navigate } from "react-router-dom";
import { PERMISSIONS } from "../features/auth/constants/roles";
import { lazy } from "react";
const AppLayout = lazy(() => import("../components/layout/AppLayout"));
const DashboardPage = lazy(() => import("../features/dashboard/DashboardPage"));
const ProductListPage = lazy(
  () => import("../features/products/pages/ProductListPage"),
);
const RecentlyDeletedPage = lazy(
  () => import("../features/products/pages/RecentlyDeletedPage"),
);
const InventoryPage = lazy(
  () => import("../features/inventory/pages/InventoryListPage"),
);
const CreateProductPage = lazy(
  () => import("../features/products/pages/CreateProductPage"),
);
const OrderPage = lazy(() => import("../features/orders/pages/OrdersPage"));

const OrderDetailsPage = lazy(
  () => import("../features/orders/pages/OrderDetailsPage"),
);
const CreateOrderPage = lazy(
  () => import("../features/orders/pages/createorder/CreateOrderPage"),
);

import { RequireRole } from "../features/auth/guards/RequiresRole";

//mount error 404 just like in public route page in future

export const Routes = [
  {
    element: <AppLayout />,
    children: [
      // { index: true, element: <Navigate to="dashboard" replace /> },

      // ✅ Admin-only routes
      {
        element: <RequireRole allowedRoles={PERMISSIONS.ADMIN_ONLY} />,
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          // { path: "addproduct", element: <CreateProductPage /> },
          // { path: "product/deleted", element: <RecentlyDeletedPage /> },
        ],
      },

      // ✅ Admin + Staff routes
      {
        element: <RequireRole allowedRoles={PERMISSIONS.ADMIN_STAFF} />,
        children: [
          { path: "inventory", element: <InventoryPage /> },
          { path: "productlist", element: <ProductListPage /> },
          { path: "addproduct", element: <CreateProductPage /> },
          { path: "product/deleted", element: <RecentlyDeletedPage /> },
          {
            path: "orders",
            children: [
              { index: true, element: <OrderPage /> },
              { path: ":orderId", element: <OrderDetailsPage /> },
            ],
          },
        ],
      },

      // Dev route example
      {
        element: <RequireRole allowedRoles={["admin"]} />,
        children: [
          {
            path: "dev",
            children: [{ index: true, element: <CreateOrderPage /> }],
          },
        ],
      },
    ],
  },
];

console.log("routes");
