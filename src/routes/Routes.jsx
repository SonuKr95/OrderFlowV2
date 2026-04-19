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
      // ✅ Admin + Viewer routes
      //Viewer and Admin role they have same route, however CRUD is blocked on viewer role with RLS. this is done in order to let anonymyous user allow to see the app full functionality

      {
        element: (
          <RequireRole allowedRoles={[PERMISSIONS.ADMIN, PERMISSIONS.VIEWER]} />
        ),
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          { path: "inventory", element: <InventoryPage /> },
          { path: "customer", element: <CustomerPage /> },
        ],
      },

      // ✅ Admin + Staff + Viewer routes
      {
        element: <RequireRole allowedRoles={PERMISSIONS.ADMIN_STAFF_VIEWER} />,
        children: [
          { path: "productlist", element: <ProductList /> },
          { path: "addproduct", element: <AddProduct /> },
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

      {
        element: <RequireRole allowedRoles={PERMISSIONS.ADMIN_STAFF_VIEWER} />,
        children: [{ path: "createorder", element: <CreateOrder /> }],
      },
    ],
  },
];
