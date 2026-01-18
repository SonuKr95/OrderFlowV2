import { useEditProduct } from "../hooks/useEditProduct";

import { useEditForm } from "../../../utils/useEditForm";

export function useEditProductForm(product) {
  const editProduct = useEditProduct();
  return useEditForm({
    product,
    fields: ["name", "price"],
    mutation: editProduct,
  });
}

/*




export function useEditProductForm(product) {
  const editProduct = useEditProduct();

  const form = useForm({
    defaultValues: { name: product.name, price: product.price },
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
    // console.log(formData);

    console.log(payload);

    editProduct.mutate({ product_id: product.product_id, ...payload });
    // console.log();
  }

  return {
    ...form,
    onSubmit: handleSubmit(submitHandler),
  };
}

*/
