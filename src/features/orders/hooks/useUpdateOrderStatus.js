import { updateOrderStatus } from "../ordersApi";
import { useMutation } from "@tanstack/react-query";
// import supabase from "../../../services/supabase";
import { useQueryClient } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { createOrderStatusHistory } from "../ordersApi";

export function useUpdateOrderStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateorderstatus"],
    mutationFn: async (payload) => {
      const status = await updateOrderStatus(payload);
      console.log(payload);
      console.log(status);

      const historyPayload = {
        order_id: status.at(0).order_id,
        status: status.at(0).status,
        changed_by: "admin",
      };

      await createOrderStatusHistory(historyPayload);

      const [{ order_id }] = status;
      return order_id;
    },

    onSuccess: (orderId) => {
      queryClient.invalidateQueries({
        queryKey: ["getorderstatushistory", orderId],
      });
    },
  });
}
