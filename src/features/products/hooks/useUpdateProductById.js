import { useMutation } from "@tanstack/react-query";
import { updateProductById } from "../productApi";

export function useUpdateProductById() {
  return useMutation({
    mutationFn: updateProductById,
  });
}
