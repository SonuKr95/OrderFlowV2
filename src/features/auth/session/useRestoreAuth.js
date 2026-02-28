import { useQuery } from "@tanstack/react-query";
import { retrieveSession } from "./retrieveSession";

export function useRestoreAuth() {
  return useQuery({
    queryKey: ["auth"],
    queryFn: retrieveSession,
    retry: false,
    staleTime: Infinity,
  });
}
