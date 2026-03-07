import { useForm } from "react-hook-form";
import { useProductCategories } from "../hooks/useProductCategories";
import { useCreateProductWithInventory } from "../hooks/useCreateProductWithInventory";
import toast from "react-hot-toast";
import { PRODUCT_FORM_SECTIONS } from "../config/productFormSections";
import CreateProductFormField from "../components/CreateProductFormField";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TAX_OPTIONS } from "../config/taxOptions";

function AddProductPage() {
  const leftSections = PRODUCT_FORM_SECTIONS.slice(
    0,
    Math.ceil(PRODUCT_FORM_SECTIONS.length / 2),
  );

  const rightSections = PRODUCT_FORM_SECTIONS.slice(
    Math.ceil(PRODUCT_FORM_SECTIONS.length / 2),
  );
  const { userRole } = useSelector((state) => state.auth);
  const isViewer = userRole === "viewer";
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      category_id: "",
      sku: "",
      selling_price: "",
      mrp: "",
      tax_rate: "",
      quantity: "",
    },
  });

  function renderSections(sections) {
    return sections.map((section) => (
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
              isViewer={isViewer}
              options={
                field.name !== "tax_rate" ? availableCategories : TAX_OPTIONS
              }
            />
          ))}
        </div>
      </div>
    ));
  }
  const { data: availableCategories = [] } = useProductCategories();
  console.log(availableCategories);
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
      {/* LEFT COLUMN */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        {renderSections(leftSections)}
      </div>

      {/* RIGHT COLUMN */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        {renderSections(rightSections)}

        <button
          disabled={isViewer}
          onClick={handleSubmit(onSubmit)}
          className="mt-6 w-full rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 disabled:opacity-70"
        >
          Publish Product
        </button>
      </div>
    </div>
  );

  // return (
  //   <div className="grid h-screen grid-cols-2 gap-6 bg-gray-50 p-6">
  //     {/* LEFT COLUMN: SINGLE CARD */}
  //     <div className="rounded-xl bg-white p-6 shadow-sm">
  //       {PRODUCT_FORM_SECTIONS.map((section) => {
  //         return (
  //           <div key={section.title} className="mb-8 last:mb-0">
  //             <h2 className="mb-4 text-lg font-semibold text-gray-800">
  //               {section.title}
  //             </h2>
  //             <div className="space-y-4">
  //               {section.fields.map((field) => (
  //                 <CreateProductFormField
  //                   key={field.name}
  //                   field={field}
  //                   register={register}
  //                   isViewer={isViewer}
  //                   options={
  //                     field.name !== "tax_rate"
  //                       ? availableCategories
  //                       : //to implement categories thats why tax rate is written in this format
  //                         [
  //                           { name: 5, id: 5 },
  //                           { name: 18, id: 18 },
  //                         ]
  //                   }
  //                 />
  //               ))}
  //             </div>
  //           </div>
  //         );
  //       })}
  //       <button
  //         disabled={isViewer}
  //         onClick={handleSubmit(onSubmit)}
  //         className="w-full rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white hover:cursor-pointer hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 disabled:opacity-70"
  //       >
  //         Publish Product
  //       </button>
  //     </div>

  //     {/* RIGHT: IMAGE */}
  //     {/* <div className="flex flex-col rounded-xl bg-white p-6 shadow-sm">
  //       <h2 className="mb-4 text-lg font-semibold text-gray-800">
  //         Product Image
  //       </h2>

  //       <div className="flex h-90 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
  //         <p className="text-sm text-gray-500">
  //           Upload or drag & drop product image
  //         </p>
  //       </div>
  //     </div> */}
  //   </div>
  // );
}

export default AddProductPage;
