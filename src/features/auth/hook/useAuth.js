import { userLogin } from "../api/userLogin";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLoginSuccess } from "../login/useLoginSuccess";

export function useAuth() {
  const handleSuccessFullLogin = useLoginSuccess();
  return useMutation({
    mutationFn: userLogin,
    onSuccess: async () => {
      await handleSuccessFullLogin();
    },
    onError: (error) => {
      toast.error(error?.message || "Login failed");
    },
  });
}
