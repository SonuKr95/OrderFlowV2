import { useQuery } from "@tanstack/react-query";
import { getOrderItemsByOrderId } from "../ordersApi";
import { getOrderAmountByOrderId } from "../ordersApi";

export function useOrderItems(orderId) {
  return useQuery({
    queryKey: ["orderItems", orderId],
    queryFn: async () => {
      const orderItems = await getOrderItemsByOrderId(orderId);
      const orderAmount = await getOrderAmountByOrderId(orderId);
      return {
        orderItems,
        orderAmount,
      };
    },
  });
}
