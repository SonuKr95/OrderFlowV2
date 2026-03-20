import { fetchOrderDetailsByOrderId } from "../ordersApi";
import { useQuery } from "@tanstack/react-query";

export function useFetchOrderDetailsByOrderId(orderId) {
  return useQuery({
    queryKey: ["order-details", orderId],
    queryFn: () => fetchOrderDetailsByOrderId(orderId),
  });
}
