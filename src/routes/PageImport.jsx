import { lazy } from "react";
export const AppLayout = lazy(() => import("../components/layout/AppLayout"));
export const DashboardPage = lazy(
  () => import("../features/dashboard/DashboardPage"),
);
export const AddProduct = lazy(
  () => import("../features/products/pages/AddProduct"),
);
export const ProductList = lazy(
  () => import("../features/products/pages/ProductList"),
);
export const ArchivedProducts = lazy(
  () => import("../features/products/pages/ArchivedProducts"),
);
export const InventoryPage = lazy(
  () => import("../features/inventory/pages/InventoryList"),
);
export const OrderPage = lazy(
  () => import("../features/orders/pages/OrdersPage"),
);
export const OrderDetailsPage = lazy(
  () => import("../features/orders/pages/OrderDetailsPage"),
);
export const CreateOrderPage = lazy(
  () => import("../features/orders/pages/createorder/CreateOrderPage"),
);
