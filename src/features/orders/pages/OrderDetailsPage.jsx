// import { useOrderItems } from "../hooks/useOrderItems";
import { OrderHeader } from "../components/OrderHeader";
import { ProductTable } from "../components/ProductTable";
import { CustomerDetails } from "../components/CustomerDetails";
import { OrderTimeline } from "../components/OrderTimeline";
import { AdminNotes } from "../components/AdminNotes";
import { PaymentDetails } from "../components/PaymentDetails";
import { ShippingDetails } from "../components/ShippingDetails";
import { SidebarCard } from "../components/SidebarCard";
import { OrderAmountDetails } from "../components/OrderAmountDetails";
// import { getOrderItemsByOrderId } from "../ordersApi";
// import { useParams } from "react-router-dom";

function OrderDetailsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <OrderHeader />
        <ProductTable />
        <CustomerDetails />
      </div>

      <div className="space-y-6">
        <OrderAmountDetails />
        <SidebarCard title={"Order Status"}>
          {/* <PaymentDetails /> */}
          <OrderTimeline />
        </SidebarCard>

        <SidebarCard title={"Payment Details"}>
          <PaymentDetails />
        </SidebarCard>

        <ShippingDetails />

        <SidebarCard title={"AdminNotes"}>
          <AdminNotes />
        </SidebarCard>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
