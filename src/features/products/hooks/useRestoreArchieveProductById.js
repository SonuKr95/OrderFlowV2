import { restoreArchieveProductById } from "../productApi";
import { useMutation } from "@tanstack/react-query";

export function useRestoreArchieveProductById() {
  return useMutation({
    mutationFn: restoreArchieveProductById,
  });
}
