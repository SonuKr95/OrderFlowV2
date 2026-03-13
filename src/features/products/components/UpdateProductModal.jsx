import { useSelector } from "react-redux";
import { useUpdateProductById } from "../hooks/useUpdateProductById";
import { useDirtyPayloadForm } from "../useDirtyPayloadForm";
import toast from "react-hot-toast";

export default function UpdateProductModal({ isOpen, onClose, product }) {
  const updateProductMutation = useUpdateProductById();
  const { userRole } = useSelector((state) => state.auth);
  const isFormDisabled = userRole === "viewer";

  const handleProductUpdate = (payload) => {
    updateProductMutation.mutate(payload, {
      onSuccess: async (sku) => {
        toast.success(`Product with SKU: ${sku} updated successfully`);
        onClose();
      },
    });
  };

  const { register, onSubmit, initialValues } = useDirtyPayloadForm({
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
        className={`w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl transition-colors duration-200 ${
          isFormDisabled ? " cursor-not-allowed" : ""
        }`}
      >
        <h2 className="mb-5 text-lg font-semibold text-gray-800">
          Edit Product
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">Product Name</label>
            <input
              name="name"
              {...register("name")}
              defaultValue={initialValues.name}
              // value={initialValues.name}
              className={`mt-1 w-full rounded-lg border p-2 ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70 " : ""}`}
            />
          </div>

          {/* SKU */}
          <div>
            <label className="text-sm text-gray-600">SKU</label>
            <input
              name="sku"
              // {...register("sku")}
              disabled
              value={product.sku}
              // onChange={handleChange}
              className={`mt-1 w-full cursor-not-allowed rounded-lg border p-2 disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70`}
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-gray-600">Category</label>
            <input
              name="category"
              value={product.category_name}
              disabled
              className={`" mt-1 w-full cursor-not-allowed rounded-lg border p-2 disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70`}
            />
          </div>

          {/* Selling Price */}
          <div>
            <label className="text-sm text-gray-600">Selling Price</label>
            <input
              name="selling_price"
              {...register("selling_price")}
              defaultValue={initialValues.selling_price}
              // onChange={handleChange}
              className={`mt-1 w-full rounded-lg border p-2 ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70 " : ""}`}
            />
          </div>

          {/* MRP */}
          <div>
            <label className="text-sm text-gray-600">MRP</label>
            <input
              name="mrp"
              {...register("mrp")}
              defaultValue={initialValues.mrp}
              // value={formData.mrp}
              // onChange={handleChange}
              className={`mt-1 w-full rounded-lg border p-2 ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70 " : ""}`}
            />
          </div>

          {/* Status */}
          {/* <div className="col-span-2">
            <label className="text-sm text-gray-600">Status</label>
            <select
              name="status"
              {...register("status")}
              // value={formData.status}
              // onChange={handleChange}
              value={initialValues.status}
              className={`mt-1 w-full rounded-lg border p-2 ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70 " : ""}`}
            >
              <option disabled>{product.status}</option>
              <option value={nextStatusValue}>{nextStatusValue}</option>
            </select>
          </div> */}
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-sm"
            // disabled={isLoading}
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className={`rounded-lg bg-blue-600 px-4 py-2 text-sm text-white ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70" : ""}`}
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
