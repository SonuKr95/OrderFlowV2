import { useUpdateProductById } from "../../hooks/useUpdateProductById";
import { useDirtyPayloadFormForProductUpdate } from "../../useDirtyPayloadFormForProductUpdate";
import toast from "react-hot-toast";
import { queryClient } from "../../../../app/queryClient";

export default function UpdateProductModal({ isOpen, onClose, product }) {
  const updateProductMutation = useUpdateProductById();

  const handleProductUpdate = (payload) => {
    updateProductMutation.mutate(payload, {
      onSuccess: async (sku) => {
        toast.success(`Product with SKU: ${sku} updated successfully`);
        onClose();
        queryClient.invalidateQueries({
          queryKey: ["products-with-inventory"],
        });
      },
    });
  };

  const { register, onSubmit, initialValues } =
    useDirtyPayloadFormForProductUpdate({
      product,
      fields: ["name", "selling_price", "mrp"],
      onPayload: handleProductUpdate,
    });

  console.log(initialValues);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Background changes to gray-50 if disabled */}
      <div
        className={`bg-surface border-border w-full max-w-lg rounded-2xl border p-6 shadow-xl transition-colors duration-200`}
      >
        <h2 className="text-text-primary text-lg font-semibold">
          Edit Product
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div className="col-span-2">
            <label className="text-text-secondary text-sm">Product Name</label>
            <input
              name="name"
              {...register("name")}
              // defaultValue={initialValues.name}
              // value={initialValues.name}
              className={`border-border bg-background text-text-primary w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-violet-500`}
            />
          </div>

          {/* SKU */}
          <div>
            <label className="text-text-secondary text-sm">SKU</label>
            <input
              name="sku"
              // {...register("sku")}
              disabled
              value={product.sku}
              // onChange={handleChange}
              className={`border-border text-text-primary w-full rounded-lg border bg-slate-500 px-3 py-2 text-sm disabled:cursor-not-allowed`}
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-text-secondary text-sm">Category</label>
            <input
              name="category"
              value={product.category_name}
              disabled
              className={`border-border text-text-primary w-full rounded-lg border bg-slate-500 px-3 py-2 text-sm disabled:cursor-not-allowed`}
            />
          </div>

          {/* Selling Price */}
          <div>
            <label className="text-text-secondary text-sm">Selling Price</label>
            <input
              name="selling_price"
              {...register("selling_price")}
              // defaultValue={initialValues.selling_price}
              // onChange={handleChange}
              className={`border-border bg-background text-text-primary w-full rounded-lg border px-3 py-2 text-sm disabled:cursor-not-allowed`}
            />
          </div>

          {/* MRP */}
          <div>
            <label className="text-text-secondary text-sm">MRP</label>
            <input
              name="mrp"
              {...register("mrp")}
              // defaultValue={initialValues.mrp}
              // value={formData.mrp}
              // onChange={handleChange}
              className={`border-border bg-background text-text-primary w-full rounded-lg border px-3 py-2 text-sm disabled:cursor-not-allowed`}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border-border text-text-secondary rounded-lg border px-4 py-2 text-sm hover:cursor-pointer hover:bg-[#2a3447]"
            // disabled={isLoading}
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className={`rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:cursor-pointer hover:bg-violet-700`}
            // disabled={isLoading || isFormDisabled}
          >
            Save
            {/* {isLoading ? "Saving..." : "Save Changes"} */}
          </button>
        </div>
      </div>
    </div>
  );
}
