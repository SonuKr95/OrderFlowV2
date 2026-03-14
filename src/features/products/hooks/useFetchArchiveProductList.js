import { fetchArchiveProductList } from "../productApi";
import { useQuery } from "@tanstack/react-query";

export function useFetchArchiveProductList() {
  return useQuery({
    queryKey: ["recently-deleted-product"],
    queryFn: fetchArchiveProductList,
  });
}
