import { updateProduct } from "../productApi";
import { useMutation } from "@tanstack/react-query";

export function useEditProduct() {
  return useMutation({
    mutationFn: updateProduct,
    // onSuccess: (productId) => {
    //   console.log(`deleted successfully,${productId}`);
    // },
  });
}
