import { useForm } from "react-hook-form";
import { useCreateProductWithInventory } from "./useCreateProductWithInventory";
import toast from "react-hot-toast";

export function useCreateProductForm() {
  const form = useForm({
    defaultValues: {
      _name: "",
      _sku: "",
      _category_id: "",
      _mrp: "",
      _selling_price: "",
      _tax_rate: "",
      //for inventory table, product table doesn't have inventory coloumn
      _quantity: "",
    },
  });

  const createProduct = useCreateProductWithInventory();

  const onSubmit = (data) => {
    createProduct.mutate(data, {
      onSuccess: ({ sku }) => {
        form.reset();
        toast.success(`Product Created Successfully with SKU: ${sku}`);
      },
      onError: ({ message }) => {
        toast.error(`Error While Creating Product ${message}`);
      },
    });
  };
  return {
    ...form,
    onSubmit,
    createProduct,
  };
}
