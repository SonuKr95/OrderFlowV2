import { useQuery } from "@tanstack/react-query";
import { fetchProductCategories } from "../productApi";

export function useProductCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchProductCategories,
    select: (categories) => categories.map((c) => c.name),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
