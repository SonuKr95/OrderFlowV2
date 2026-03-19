import { createOrder } from "../ordersApi";
import { useMutation } from "@tanstack/react-query";

export function useCreateOrder() {
  return useMutation({
    mutationFn: createOrder,
  });
}
