import { fetchProductList } from "../productApi";
import { useQuery } from "@tanstack/react-query";

export function useFetchProductList() {
  return useQuery({
    queryKey: ["productlist"],
    queryFn: fetchProductList,
  });
}
