import { useForm } from "react-hook-form";
import { useProductCategories } from "../hooks/useProductCategories";
import { useCreateProductWithInventory } from "../hooks/useCreateProductWithInventory";
import toast from "react-hot-toast";
import { PRODUCT_FORM_SECTIONS } from "../config/productFormSections";
import CreateProductFormField from "../components/CreateProductFormField";
import { useNavigate } from "react-router-dom";

function AddProductPage() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      category: "",
      sku: "",
      description: "",
      selling_price: "",
      mrp: "",
      tax_rate: "",
      quantity: "",
    },
  });
  const { data: categories = [] } = useProductCategories();
  const createProductMutation = useCreateProductWithInventory();
  function onSubmit(formData) {
    createProductMutation.mutate(formData, {
      onSuccess: (product) => {
        reset();
        toast.success(`Created ${product.name}`);
        navigate("/productlist");
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
                  <CreateProductFormField
                    key={field.name}
                    field={field}
                    register={register}
                    options={field.name !== "tax_rate" ? categories : [5, 18]}
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
