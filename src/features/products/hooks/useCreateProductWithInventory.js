import { useMutation } from "@tanstack/react-query";
import { createProductWithInventory } from "../productApi";

export function useCreateProductWithInventory() {
  return useMutation({
    mutationFn: createProductWithInventory,
  });
}
