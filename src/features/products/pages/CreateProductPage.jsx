import { useForm } from "react-hook-form";
import { useFetchProductCategories } from "../hooks/useFetchProductsCategories";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { PRODUCT_FORM_SECTIONS } from "../constants/productFormFields";
import FormField from "../components/FormField";

function AddProductPage() {
  const categories = useFetchProductCategories();
  const categoryName = categories?.map((category) => category.name);
  console.log(categoryName);

  const { register, handleSubmit, reset } = useForm();
  const addProductMutation = useCreateProduct();

  function onSubmit(formData) {
    addProductMutation.mutate(formData, {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <div className="grid h-screen grid-cols-2 gap-6 bg-gray-50 p-6">
      {/* LEFT COLUMN: SINGLE CARD */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        {PRODUCT_FORM_SECTIONS.map((section) => {
          return (
            <div key={section.title} className="mb-8 last:mb-0">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.fields.map((field) => (
                  <FormField
                    key={field.name}
                    field={field}
                    register={register}
                    options={categoryName}
                  />
                ))}
              </div>
            </div>
          );
        })}
        <button
          onClick={handleSubmit(onSubmit)}
          className="w-full rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white hover:cursor-pointer hover:bg-green-700"
        >
          Publish Product
        </button>
      </div>

      {/* RIGHT: IMAGE */}
      <div className="flex flex-col rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Product Image
        </h2>

        <div className="flex h-90 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-sm text-gray-500">
            Upload or drag & drop product image
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
