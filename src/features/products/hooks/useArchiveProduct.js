import { useMutation } from "@tanstack/react-query";
import { archiveProductById } from "../productApi";

export function useArchiveProduct() {
  return useMutation({
    mutationFn: archiveProductById,
  });
}
