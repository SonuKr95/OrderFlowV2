import { searchProducts } from "../productApi";
import { useQuery } from "@tanstack/react-query";

export function useSearchProducts(searchTerm) {
  return useQuery({
    queryKey: ["products", searchTerm],
    queryFn: () => searchProducts(searchTerm),
    enabled: !!searchTerm,
  });
}
