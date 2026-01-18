import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../ordersApi";

export function useGetOrders() {
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
  console.log(data);
  return data;
}
