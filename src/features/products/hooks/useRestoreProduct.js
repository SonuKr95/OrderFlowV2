import { restoreProduct } from "../productApi";
import { useMutation } from "@tanstack/react-query";

export function useRestoreProduct() {
  return useMutation({
    mutationFn: restoreProduct,
  });
}
