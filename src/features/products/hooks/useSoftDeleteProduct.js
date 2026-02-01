import { useMutation } from "@tanstack/react-query";
import { softDeleteProductById } from "../productApi";

export function useSoftDeleteProduct() {
  return useMutation({
    mutationFn: softDeleteProductById,
  });
}
