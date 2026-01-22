import { OrderTimelineMini } from "./OrderTimelineMini";
import { useParams } from "react-router-dom";
import { useGetOrderStatusHistoryByOrderId } from "../hooks/useGetOrderStatusHistoryByOrderId";

export function OrderTimeline() {
  const { orderId } = useParams();
  const {
    data: orderStatus,
    isLoading,
    error,
  } = useGetOrderStatusHistoryByOrderId(orderId);
  console.log(orderStatus);
  // const getOrderStatus = useGetOrderStatusHistoryByOrderId();
  return (
    <div className="pr-5">
      {orderStatus?.map((status) => (
        <OrderTimelineMini
          status={status.status}
          changed_at={status.changed_at}
          changed_by={status.changed_by}
        />
      ))}
    </div>
  );
}
