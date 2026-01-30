import { fetchRecentlyDeleted } from "../productApi";
import { useQuery } from "@tanstack/react-query";

export function useRecentlyDeleted() {
  return useQuery({
    queryKey: ["recently-deleted-product"],
    queryFn: fetchRecentlyDeleted,
  });
}
