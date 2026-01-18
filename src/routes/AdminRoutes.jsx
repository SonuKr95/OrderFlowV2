import { Navigate } from "react-router-dom";

import { lazy, Suspense } from "react";
const AppLayout = lazy(() => import("../components/layout/AppLayout"));
const DashboardPage = lazy(() => import("../features/dashboard/DashboardPage"));
const ProductListPage = lazy(
  () => import("../features/products/pages/ProductListPage"),
);
const InventoryPage = lazy(
  () => import("../features/inventory/pages/InventoryPage"),
);
const AddproductPage = lazy(
  () => import("../features/products/pages/AddProductPage"),
);
const OrderPage = lazy(() => import("../features/orders/pages/OrdersPage"));

// const OrderItemPage = lazy(
//   () => import("../features/orders/pages/OrderItemPage"),
// );

// import { OrderItemPage } from "../features/orders/pages/OrderItemPage";
const OrderDetailsPage = lazy(
  () => import("../features/orders/pages/OrderDetailsPage"),
);
const CreateOrderPage = lazy(
  () => import("../features/orders/pages/createorder/CreateOrderPage"),
);

export const AdminRoutes = [
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "inventory", element: <InventoryPage /> },
      { path: "productlist", element: <ProductListPage /> },
      { path: "addproduct", element: <AddproductPage /> },
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
