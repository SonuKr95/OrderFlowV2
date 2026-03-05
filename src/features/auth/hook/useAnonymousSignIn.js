import { useMutation } from "@tanstack/react-query";
import { anonymousUserLogin } from "../api/anonymousUserLogin";
import toast from "react-hot-toast";
import { useAnonymousLoginSuccess } from "../login/useAnonymousLoginSuccess";

export function useAnonymousSignIn() {
  const handleAnonymousLoginSuccess = useAnonymousLoginSuccess();
  return useMutation({
    mutationFn: anonymousUserLogin,
    onSuccess: async () => {
      await handleAnonymousLoginSuccess();
    },
    onError: (error) => {
      toast.error(error?.message || "Anonymous Login Failed");
    },
  });
}
