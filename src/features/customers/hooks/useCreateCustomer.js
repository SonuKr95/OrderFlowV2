import { createCustomer } from "../customerApi";
import { useMutation } from "@tanstack/react-query";

export function useCreateCustomer() {
  return useMutation({
    mutationFn: createCustomer,
  });
}
