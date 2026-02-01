import { Navigate } from "react-router-dom";
import { lazy } from "react";

const AppLayout = lazy(() => import("../components/layout/AppLayout"));
const ProductListPage = lazy(
  () => import("../features/products/pages/ProductListPage"),
);
const InventoryPage = lazy(
  () => import("../features/inventory/pages/InventoryListPage"),
);
const CreateProductPage = lazy(
  () => import("../features/products/pages/CreateProductPage"),
);
const RecentlyDeletedPage = lazy(
  () => import("../features/products/pages/RecentlyDeletedPage"),
);

//mount error 404 just like in public route page in future

export const StaffRoutes = [
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="productlist" replace /> },
      { path: "productlist", element: <ProductListPage /> },
      { path: "inventory", element: <InventoryPage /> },
      { path: "addproduct", element: <CreateProductPage /> },
      { path: "product/deleted", element: <RecentlyDeletedPage /> },
    ],
  },
];
