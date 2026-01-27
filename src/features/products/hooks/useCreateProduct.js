import { useMutation } from "@tanstack/react-query";
// import { addProduct } from "../../../services/_productApi";
// import { createInventory } from "../../../services/_inventoryApi";
import { createProduct } from "../productApi";
import { createInventory } from "../../inventory/inventoryApi";

export function useCreateProduct() {
  return useMutation({
    mutationKey: ["createProduct"],
    mutationFn: createProduct,
    onSuccess: ({ product_id, product_quantity }) => {
      createInventory(product_id, product_quantity);
    },
  });
}
