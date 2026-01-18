import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../../store/slices/authSlice";
import { fetchLoginFromBrowser } from "./fetchLoginFromBrowser";
import { useEffect } from "react";

export function useFetchStoredAuth() {
  const dispatch = useDispatch();
  const {
    data: auth,
    isPending,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["auth"],
    queryFn: fetchLoginFromBrowser,
    retry: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isSuccess && auth) {
      dispatch(
        setAuthUser({
          email: auth.email,
          loggerUserRole: auth.role,
        }),
      );
    }
  });
  return {
    auth: auth ?? null,
    isPending,
    isFetching,
  };
}
