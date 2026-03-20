// import { useOrderItems } from "../hooks/useOrderItems";
import { OrderHeader } from "../components/OrderHeader";
import { ProductTable } from "../components/ProductTable";
import { CustomerDetails } from "../components/CustomerDetails";
// import { OrderTimeline } from "../components/OrderTimeline";
import { AdminNotes } from "../components/AdminNotes";

import { SidebarCard } from "../components/SidebarCard";
import { OrderAmountDetails } from "../components/OrderAmountDetails";
import { useFetchOrderDetailsByOrderId } from "../hooks/useFetchOrderDetailsByOrderId";
// import { getOrderItemsByOrderId } from "../ordersApi";
import { useParams } from "react-router-dom";

function OrderDetailsPage() {
  const { orderId } = useParams();
  console.log(orderId);
  const {
    data: orderDetails = [],
    isLoading,
    error,
  } = useFetchOrderDetailsByOrderId(orderId);

  console.log(orderDetails);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <OrderHeader orderDetails={orderDetails} />
        <ProductTable orderDetails={orderDetails} />
        <CustomerDetails orderDetails={orderDetails} />
      </div>

      <div className="space-y-6">
        <OrderAmountDetails orderDetails={orderDetails} />
        {/* <SidebarCard title={"Order Status"}> */}
        {/* <PaymentDetails /> */}
        {/* <OrderTimeline /> */}
        {/* </SidebarCard> */}

        <SidebarCard title={"AdminNotes"}>
          <AdminNotes orderDetails={orderDetails} />
        </SidebarCard>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
