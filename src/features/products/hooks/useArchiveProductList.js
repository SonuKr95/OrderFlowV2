import { fetchArchiveProductList } from "../productApi";
import { useQuery } from "@tanstack/react-query";

export function useArchiveProductList() {
  return useQuery({
    queryKey: ["recently-deleted-product"],
    queryFn: fetchArchiveProductList,
  });
}
