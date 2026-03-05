import { useForm } from "react-hook-form";
import { useMemo, useEffect } from "react";
export function useEditForm({ data, fields, mutation, isDisabled }) {
  const initialValues = useMemo(() => {
    return Object.fromEntries(
      fields.map((field) => [field, data?.[field] ?? ""]),
    );
  }, [data, fields]);

  const {
    register,
    handleSubmit,
    formState: { isDirty, dirtyFields },
  } = useForm({
    values: initialValues,
    disabled: isDisabled,
  });

  // testing
  // useEffect(() => {
  //   reset(initialValues);
  // }, [initialValues, reset]);

  function submitHandler(formData) {
    if (!isDirty) return;
    const payload = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = formData[key];
      return acc;
    }, {});
    mutation.mutate({
      id: data.id,
      ...payload,
    });
  }

  return {
    initialValues,
    register,
    onSubmit: handleSubmit(submitHandler),
    isDirty,
    isLoading: mutation.isPending,
  };
}
