import { useQuery } from "@tanstack/react-query";
import { fetchActiveProductList } from "../productApi";

export function useActiveProductList() {
  return useQuery({
    queryKey: ["products-with-inventory"],
    queryFn: async () => {
      return fetchActiveProductList();
    },
  });
}
