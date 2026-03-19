import { useQuery } from "@tanstack/react-query";
import { fecthCustomers } from "../customerApi";

export function useFecthCustomers() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: fecthCustomers,
    // staleTime: 1000 * 60 * 5,
  });
}
