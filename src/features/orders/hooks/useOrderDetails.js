import { getOrderDetailsByOrderId } from "../ordersApi";
import { useQuery } from "@tanstack/react-query";

export function useOrderDetails(orderId) {
  return useQuery({
    queryKey: ["orderdetails", orderId],
    queryFn: async () => {
      const orderDetails = await getOrderDetailsByOrderId(orderId);
      return orderDetails.at(0);
    },
    // enabled: !!orderId,
  });
}
