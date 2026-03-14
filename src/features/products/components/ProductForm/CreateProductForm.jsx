import { useSelector } from "react-redux";
import { CREATE_PRODUCT_FORM_SECTIONS } from "../../config/createProductFormSections";
import { useFetchProductCategories } from "../../hooks/useFetchProductCategories";
import { useCreateProductForm } from "../../hooks/useCreateProductForm";
import CreateProductFormSection from "./CreateProductFormSection";

function CreateProductForm() {
  const { userRole } = useSelector((state) => state.auth);
  const isViewer = userRole === "viewer";
  const { data: categories = [] } = useFetchProductCategories();
  const { register, handleSubmit, onSubmit } = useCreateProductForm();
  const mid = Math.ceil(CREATE_PRODUCT_FORM_SECTIONS.length / 2);
  const left = CREATE_PRODUCT_FORM_SECTIONS.slice(0, mid);
  const right = CREATE_PRODUCT_FORM_SECTIONS.slice(mid);
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <CreateProductFormSection
          sections={left}
          register={register}
          categories={categories}
          isViewer={isViewer}
        />
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <CreateProductFormSection
          sections={right}
          register={register}
          categories={categories}
          isViewer={isViewer}
        />

        <button
          disabled={isViewer}
          onClick={handleSubmit(onSubmit)}
          className="mt-6 w-full rounded-lg bg-green-600 py-2.5 text-white"
        >
          Publish Product
        </button>
      </div>
    </div>
  );
}

export default CreateProductForm;
