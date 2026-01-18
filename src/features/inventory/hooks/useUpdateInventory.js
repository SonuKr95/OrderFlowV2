import { updateInventory } from "../inventoryApi";
import { useMutation } from "@tanstack/react-query";

export function UseUpdateInventory() {
  return useMutation({
    mutationFn: updateInventory,
  });
}
