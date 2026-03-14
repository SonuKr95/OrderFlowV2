import { useQuery } from "@tanstack/react-query";
import { fetchActiveProductList } from "../productApi";

export function useFetchActiveProductList() {
  return useQuery({
    queryKey: ["products-with-inventory"],
    queryFn: async () => {
      return fetchActiveProductList();
    },
  });
}
