import { useSelector } from "react-redux";
import { CREATE_PRODUCT_FORM_SECTIONS } from "../../config/createProductFormSections";
import { useFetchProductCategories } from "../../hooks/useFetchProductCategories";
import { useCreateProductForm } from "../../hooks/useCreateProductForm";
import CreateProductFormSection from "./CreateProductFormSection";

function CreateProductForm() {
  const { userRole } = useSelector((state) => state.auth);
  const isViewer = userRole === "viewer";
  const { data: categories = [] } = useFetchProductCategories();
  const { register, handleSubmit, onSubmit, createProduct } =
    useCreateProductForm();
  const mid = Math.ceil(CREATE_PRODUCT_FORM_SECTIONS.length / 2);
  const left = CREATE_PRODUCT_FORM_SECTIONS.slice(0, mid);
  const right = CREATE_PRODUCT_FORM_SECTIONS.slice(mid);
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="bg-surface border-border rounded-2xl border p-6 shadow-md">
        <CreateProductFormSection
          sections={left}
          register={register}
          categories={categories}
          isViewer={isViewer}
        />
      </div>

      <div className="bg-surface border-border rounded-2xl border p-6 shadow-sm">
        <CreateProductFormSection
          sections={right}
          register={register}
          categories={categories}
          isViewer={isViewer}
        />

        <div className="border-border mt-8 border-t pt-6">
          <button
            disabled={createProduct.isPending}
            onClick={handleSubmit(onSubmit)}
            className="mt-6 w-full rounded-lg bg-violet-600 py-2.5 text-sm font-medium text-white transition hover:cursor-pointer hover:bg-violet-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {createProduct.isPending ? "Publishing..." : "Publish Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProductForm;
