import { useQuery } from "@tanstack/react-query";
import { fetchActiveInventory } from "../inventoryApi";

export function useFetchActiveInventory() {
  return useQuery({
    queryKey: ["fetch-active-inventory"],
    queryFn: fetchActiveInventory,
  });
}
