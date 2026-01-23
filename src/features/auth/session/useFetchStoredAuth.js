import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../../app/store/slices/authSlice";
import { savedLogin } from "./savedLogin";
// import { useEffect } from "react";

export function useFetchStoredAuth() {
  const dispatch = useDispatch();
  return useQuery({
    queryKey: ["auth"],
    queryFn: savedLogin,
    retry: false,
    staleTime: Infinity,
  });

  // useEffect(() => {
  //   if (isSuccess && auth) {
  //     dispatch(
  //       setAuthUser({
  //         email: auth.email,
  //         loggerUserRole: auth.role,
  //       }),
  //     );
  //   }
  // });
  // return {
  //   auth: auth ?? null,
  //   isPending,
  //   isFetching,
  // };
}
