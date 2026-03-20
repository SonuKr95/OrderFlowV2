import { useQuery } from "@tanstack/react-query";
import { fetchOrderList } from "../ordersApi";

export function useFetchOrderList() {
  return useQuery({
    queryKey: ["fetch-orders"],
    queryFn: fetchOrderList,
  });
}
