import { useMutation } from "@tanstack/react-query";
import { deleteProductById } from "../productApi";

export function useDeleteProductById() {
  return useMutation({
    mutationFn: deleteProductById,
  });
}
