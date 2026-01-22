import { getOrderStatusHistoryByOrderId } from "../ordersApi";
import { useQuery } from "@tanstack/react-query";

export function useGetOrderStatusHistoryByOrderId(orderId) {
  return useQuery({
    queryKey: ["getorderstatushistory", orderId],
    queryFn: async () => {
      const status = await getOrderStatusHistoryByOrderId(orderId);

      return status;
    },
  });
}
