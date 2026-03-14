import { useMutation } from "@tanstack/react-query";
import { archiveProductById } from "../productApi";

export function useArchiveProductById() {
  return useMutation({
    mutationFn: archiveProductById,
  });
}
