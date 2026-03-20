import { useQuery } from "@tanstack/react-query";
import { fetchOrderItemsByOrderId } from "../ordersApi";

export function useFetchOrderItemsByOrderId(orderId) {
  return useQuery({
    queryKey: ["order-items", orderId],
    queryFn: () => fetchOrderItemsByOrderId(orderId),
  });
}
