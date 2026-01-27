import { useQuery } from "@tanstack/react-query";
import { fetchProductsCategories } from "../productApi";

export function useFetchProductCategories() {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchProductsCategories,
  });
  return data;
}
