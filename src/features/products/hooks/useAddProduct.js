import { useMutation } from "@tanstack/react-query";
// import { addProduct } from "../../../services/_productApi";
// import { createInventory } from "../../../services/_inventoryApi";
import { addProduct } from "../productApi";
import { createInventory } from "../../inventory/inventoryApi";

export function useAddProduct() {
  return useMutation({
    mutationFn: addProduct,
    onSuccess: ({ product_id, product_quantity }) => {
      createInventory(product_id, product_quantity);
    },
  });
}
