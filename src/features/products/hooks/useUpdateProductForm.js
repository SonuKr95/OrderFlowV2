import { useEditForm } from "../../forms/useEditForm";
import { useUpdateProductById } from "./useUpdateProductById";
export function useUpdateProductForm(product) {
  const data = product;
  const updateProductMutation = useUpdateProductById();
  return useEditForm({
    data,
    fields: ["name", "selling_price", "mrp", "status", "category", "sku"],
    mutation: updateProductMutation,
  });
}
