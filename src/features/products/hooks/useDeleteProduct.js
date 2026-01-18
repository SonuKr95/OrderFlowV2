import supabase from "../../../services/supabase";
import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../productApi";

export function useDeleteProduct() {
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (productId) => {
      console.log(`deleted successfully,${productId}`);
    },
  });
}
