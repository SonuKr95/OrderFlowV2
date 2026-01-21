import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../productApi";

export function useProductList() {
  const { data: productList } = useQuery({
    queryKey: ["productlist"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
  console.log(productList);
  return productList;
}
