import { useMutation } from "@tanstack/react-query";
import { softDeleteProductById } from "../productApi";

export function useDeleteProductById() {
  return useMutation({
    mutationFn: softDeleteProductById,
  });
}
