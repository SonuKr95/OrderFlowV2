import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const ProductListPage = lazy(
  () => import("../features/products/pages/ProductListPage"),
);
const AppLayout = lazy(() => import("../components/layout/AppLayout"));
const InventoryPage = lazy(
  () => import("../features/inventory/pages/InventoryPage"),
);
const AddproductPage = lazy(
  () => import("../features/products/pages/AddProductPage"),
);

export const StaffRoutes = [
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="productlist" replace /> },
      { path: "productlist", element: <ProductListPage /> },
      { path: "inventory", element: <InventoryPage /> },
      { path: "addproduct", element: <AddproductPage /> },
    ],
  },
];
