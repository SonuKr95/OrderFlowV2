import { useMutation } from "@tanstack/react-query";
import { anonymousSignin } from "../login/anonymousSignin";
import toast from "react-hot-toast";
import { useAnonymousLoginSuccess } from "../login/useAnonymousLoginSuccess";

export function useAnonymousSignIn() {
  const handleAnonymousLoginSuccess = useAnonymousLoginSuccess();
  return useMutation({
    mutationFn: anonymousSignin,
    onSuccess: async () => {
      await handleAnonymousLoginSuccess();
    },
    onError: (error) => {
      toast.error(error?.message || "Anonymous Login Failed");
    },
  });
}
