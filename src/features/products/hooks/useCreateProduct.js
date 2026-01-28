import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../productApi";
import { createInventory } from "../../inventory/inventoryApi";

export function useCreateProduct() {
  return useMutation({
    mutationFn: createProduct,
    onSuccess: (product, variables) => {
      createInventory({
        id: product.id,
        sku: product.sku,
        status: product.status,
        quantity: variables.quantity,
      });
    },
  });
}
