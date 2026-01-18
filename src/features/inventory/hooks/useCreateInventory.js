import { useMutation } from "@tanstack/react-query";
import { createInventory } from "../../services/inventoryApi";

export function useCreateInventory() {
  return useMutation({
    mutationFn: createInventory,
  });
}
