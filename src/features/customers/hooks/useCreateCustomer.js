import { createCustomer } from "../customerApi";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../app/queryClient";

export const useCreateCustomer = () => {
  const mutation = useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });
  return mutation;
};
