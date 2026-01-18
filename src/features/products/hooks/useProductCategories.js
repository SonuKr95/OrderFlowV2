import { useQuery } from "@tanstack/react-query";
import { productCategories } from "../../../services/_categoriesApi";

export function useProductCategories() {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: productCategories,
  });
  console.log(data);
  return data;
}
