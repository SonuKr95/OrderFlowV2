import { useQuery } from "@tanstack/react-query";
import { getOrderItemsByOrderId } from "../ordersApi";

export function useOrderItems(orderId) {
  return useQuery({
    queryKey: ["orderItems", orderId],
    queryFn: () => getOrderItemsByOrderId(orderId),
    enabled: !!orderId,
  });
}
