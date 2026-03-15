import { updateInventory } from "../inventoryApi";
import { useMutation } from "@tanstack/react-query";

export function useUpdateInventory() {
  return useMutation({
    mutationFn: updateInventory,
  });
}
