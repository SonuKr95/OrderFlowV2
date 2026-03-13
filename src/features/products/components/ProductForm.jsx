import { useSelector } from "react-redux";
import { PRODUCT_FORM_SECTIONS } from "../config/productFormSections";
import { useProductCategories } from "../hooks/useProductCategories";
import { useProductForm } from "../hooks/useProductForm";
import ProductFormSection from "./ProductFormSection";

function ProductForm() {
  const { userRole } = useSelector((state) => state.auth);
  const isViewer = userRole === "viewer";
  const { data: categories = [] } = useProductCategories();
  const { register, handleSubmit, onSubmit } = useProductForm();
  const mid = Math.ceil(PRODUCT_FORM_SECTIONS.length / 2);
  const left = PRODUCT_FORM_SECTIONS.slice(0, mid);
  const right = PRODUCT_FORM_SECTIONS.slice(mid);
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <ProductFormSection
          sections={left}
          register={register}
          categories={categories}
          isViewer={isViewer}
        />
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <ProductFormSection
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

export default ProductForm;
