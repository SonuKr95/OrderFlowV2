import { useForm } from "react-hook-form";

export function useEditForm({ product, fields, mutation }) {
  const defaultValues = Object.fromEntries(
    fields.map((field) => [field, product[field]]),
  );

  const form = useForm({
    defaultValues,
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

    mutation.mutate({ product_id: product.product_id, ...payload });
    // console.log();
  }

  return {
    ...form,
    onSubmit: handleSubmit(submitHandler),
    // register,
  };
}
