import { useState, useEffect } from "react";
import { useUpdateProductForm } from "../hooks/useUpdateProductForm";

export default function EditProductModal({ isOpen, onClose, product }) {
  const { register, onSubmit, isDirty, initialValues, isLoading } =
    useUpdateProductForm(product);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
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
              // value={product.name}
              className="mt-1 w-full rounded-lg border p-2"
            />
          </div>

          {/* SKU */}
          <div>
            <label className="text-sm text-gray-600">SKU</label>
            <input
              name="sku"
              // {...register("sku")}
              disabled
              value={initialValues.sku}
              // onChange={handleChange}
              className="mt-1 w-full rounded-lg border p-2"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-gray-600">Category</label>
            <input
              name="category"
              {...register("name")}
              // value={formData.category}
              // onChange={handleChange}
              className="mt-1 w-full rounded-lg border p-2"
            />
          </div>

          {/* Selling Price */}
          <div>
            <label className="text-sm text-gray-600">Selling Price</label>
            <input
              name="selling_price"
              {...register("selling_price")}
              // value={formData.selling_price}
              // onChange={handleChange}
              className="mt-1 w-full rounded-lg border p-2"
            />
          </div>

          {/* MRP */}
          <div>
            <label className="text-sm text-gray-600">MRP</label>
            <input
              name="mrp"
              {...register("mrp")}
              // value={formData.mrp}
              // onChange={handleChange}
              className="mt-1 w-full rounded-lg border p-2"
            />
          </div>

          {/* Status */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">Status</label>
            <select
              name="status"
              {...register("status")}
              // value={formData.status}
              // onChange={handleChange}
              className="mt-1 w-full rounded-lg border p-2"
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-sm"
            disabled={isLoading}
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
