import { getDashboardStats } from "../dashboardApi";
import { useQuery } from "@tanstack/react-query";

export function useGetDashboardStats() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardStats,
  });
}
