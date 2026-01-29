import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../productApi";
import { createInventory } from "../../inventory/inventoryApi";

export function useCreateProductWithInventory() {
  return useMutation({
    mutationFn: async (payload) => {
      const createProductPayload = { ...payload, status: "active" };
      const product = await createProduct(createProductPayload);
      await createInventory({
        id: product.id,
        sku: product.sku,
        status: product.status,
        quantity: payload.quantity,
      });
      return product;
    },
  });
}
