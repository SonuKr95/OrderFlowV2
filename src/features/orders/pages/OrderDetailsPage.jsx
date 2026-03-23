import { useFetchOrderDetailsByOrderId } from "../hooks/useFetchOrderDetailsByOrderId";
import { useParams } from "react-router-dom";
import OrderHeader from "../components/OrderHeader";
import CustomerDetails from "../components/CustomerDetails";
import OrderItemTable from "../components/OrderItemTable";
import AdminNotes from "../components/AdminNotes";
import SidebarCard from "../components/SidebarCard";
import OrderAmountDetails from "../components/OrderAmountDetails";

function OrderDetailsPage() {
  const { orderId } = useParams();
  const {
    data: orderDetails = [],
    isLoading,
    error,
  } = useFetchOrderDetailsByOrderId(orderId);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Left */}
      <div className="space-y-6 lg:col-span-2">
        <OrderHeader orderDetails={orderDetails} />
        <OrderItemTable orderDetails={orderDetails} />
        <CustomerDetails orderDetails={orderDetails} />
      </div>

      {/* Right */}
      <div className="space-y-6">
        <OrderAmountDetails orderDetails={orderDetails} />

        <SidebarCard title="Admin Notes">
          <AdminNotes orderDetails={orderDetails} />
        </SidebarCard>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
