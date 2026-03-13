import { useForm } from "react-hook-form";
import { useCreateProductWithInventory } from "../hooks/useCreateProductWithInventory";
import toast from "react-hot-toast";

export function useProductForm() {
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
    });
  };
  return {
    ...form,
    onSubmit,
  };
}
