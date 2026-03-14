import { useForm } from "react-hook-form";
import { useMemo } from "react";
export function useDirtyPayloadFormForProductUpdate({
  product,
  fields,
  onPayload,
}) {
  console.log(product);
  const initialValues = useMemo(() => {
    return Object.fromEntries(
      fields.map((field) => [field, product?.[field] ?? ""]),
    );
  }, [product, fields]);

  const {
    register,
    handleSubmit,
    formState: { isDirty, dirtyFields },
  } = useForm({
    values: initialValues,
  });

  function sanitizedData(formData) {
    if (!isDirty) return;
    const payload = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = formData[key];
      return acc;
    }, {});

    const result = {
      id: product.id,
      ...payload,
    };
    onPayload?.(result);
  }

  return {
    initialValues,
    register,
    onSubmit: handleSubmit(sanitizedData),
  };
}
