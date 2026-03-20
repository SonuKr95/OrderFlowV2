import { PERMISSIONS } from "../features/auth/constants/roles";
import { RequireRole } from "../features/auth/guards/RequiresRole";
import {
  AddProduct,
  AppLayout,
  DashboardPage,
  ProductList,
  ArchivedProducts,
  InventoryPage,
  OrderPage,
  OrderDetailsPage,
  CreateOrder,
  CustomerPage,
} from "./PageImport";

//mount error 404 just like in public route page in future

export const Routes = [
  {
    element: <AppLayout />,
    children: [
      // ✅ Admin-only routes
      {
        element: <RequireRole allowedRoles={PERMISSIONS.ADMIN_ONLY} />,
        children: [{ path: "dashboard", element: <DashboardPage /> }],
      },

      // ✅ Admin + Staff routes
      {
        element: <RequireRole allowedRoles={PERMISSIONS.ADMIN_STAFF} />,
        children: [
          { path: "inventory", element: <InventoryPage /> },
          { path: "productlist", element: <ProductList /> },
          { path: "addproduct", element: <AddProduct /> },
          { path: "customer", element: <CustomerPage /> },

          { path: "product/archived", element: <ArchivedProducts /> },
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
        element: <RequireRole allowedRoles={PERMISSIONS.ADMIN_ONLY} />,
        children: [
          {
            path: "dev",
            children: [{ index: true, element: <CreateOrder /> }],
          },
        ],
      },
    ],
  },
];
