import { useForm } from "react-hook-form";

export function useCreateForm({ defaultValues }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { defaultValues },
  });

  return {
    register,
    handleSubmit,
    reset,
  };
}
