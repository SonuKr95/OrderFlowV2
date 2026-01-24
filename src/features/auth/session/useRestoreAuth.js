import { useQuery } from "@tanstack/react-query";
import { savedLogin } from "./savedLogin";

export function useRestoreAuth() {
  return useQuery({
    queryKey: ["auth"],
    queryFn: savedLogin,
    retry: false,
    staleTime: Infinity,
    meta: {
      dispatchSavedLogin: ({ id, email, role }) => ({
        id,
        email,
        role,
      }),
    },
  });
}
