import { createOrder } from "../ordersApi";
import { createOrderItem } from "../ordersApi";
import { useMutation } from "@tanstack/react-query";

export function useCreateOrder() {
  return useMutation({
    mutationKey: ["createOrder"],
    mutationFn: createOrder,
    onSuccess: (data) => {
      const [{ payload, products }] = data;

      // const [{ order_id }] = data;

      console.log(payload);
      console.log(products);
    },
  });
}
