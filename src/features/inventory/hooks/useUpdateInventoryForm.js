import { useEditForm } from "../../../utils/useEditForm";
import { UseUpdateInventory } from "./useUpdateInventory";

export function useUpdateInventoryForm(product) {
  console.log(product);

  const updateInventory = UseUpdateInventory();

  return useEditForm({
    product,
    fields: ["quantity"],
    mutation: updateInventory,
  });
}

/*
export function useUpdateInventoryForm(product) {
  console.log(product);

  const updateInventory = UseUpdateInventory();

  const form = useForm({
    defaultValues: { quantity: product.quantity },
  });

  const {
    handleSubmit,
    formState: { isDirty, dirtyFields },
  } = form;

  function submitHandler(formData) {
    if (!isDirty) return;

    const payload = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = formData[key];
      return acc;
    }, {});

    console.log(product);

    updateInventory.mutate({ product_id: product.product_id, ...payload });
    // console.log();
  }

  return {
    ...form,
    onSubmit: handleSubmit(submitHandler),
  };
}
  */
