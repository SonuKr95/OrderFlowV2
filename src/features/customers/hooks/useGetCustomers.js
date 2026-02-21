import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../customerApi";

export function useGetCustomers() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
    // staleTime: 1000 * 60 * 5,
  });
}
