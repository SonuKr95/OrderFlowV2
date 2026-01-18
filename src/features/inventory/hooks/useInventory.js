import { useQuery } from "@tanstack/react-query";

import { getInventory } from "..//inventoryApi";

export function useGetInventory() {
  const { data } = useQuery({
    queryKey: ["inventory"],
    queryFn: getInventory,
  });
  // console.log(data);
  return data;
}
