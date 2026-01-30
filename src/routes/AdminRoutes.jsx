import { Navigate } from "react-router-dom";

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
  () => import("../features/inventory/pages/InventoryPage"),
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

//mount error 404 just like in public route page in future

export const AdminRoutes = [
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <DashboardPage /> },
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
      {
        path: "dev",
        children: [
          {
            index: true,
            element: <CreateOrderPage />,
          },
        ],
      },
    ],
  },
];
