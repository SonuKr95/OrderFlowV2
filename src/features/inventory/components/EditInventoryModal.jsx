import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  STOCK_ADJUSTMENT_ACTION,
  STOCK_ADJUSTMENT_REASON,
} from "../constants/stockAdjustment";
import { useAdjustStock } from "../hooks/useAdjustStock";
import { useSelector } from "react-redux";

export default function EditInventoryModal({ isOpen, onClose, product }) {
  const { userRole } = useSelector((state) => state.auth);
  const isFormDisabled = userRole === "viewer";
  const [selectedAdjustment, setSelectedAdjustment] = useState(null);
  const adjustStockMutation = useAdjustStock();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { adjusted_quantity: "" },
    isFormDisabled,
  });
  if (!isOpen) return null;

  function resetselection() {
    onClose();
    setSelectedAdjustment(null);
  }

  ///willl check later

  function onsubmit(formdata) {
    adjustStockMutation.mutate({
      ...formdata,
      adjustment_type: selectedAdjustment,
      id: product.id,
    });
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={`w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl ${
          isFormDisabled ? " cursor-not-allowed" : ""
        }`}
      >
        <h2 className="mb-5 text-lg font-semibold text-gray-800">
          {`Adjust Stock for ${product.name}`}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">Product Name</label>
            <input
              name="name"
              disabled
              value={product.name}
              className="mt-1 w-full rounded-lg border bg-white p-2 text-gray-900 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
            />
          </div>

          {/* SKU */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">SKU</label>
            <input
              name="sku"
              disabled
              value={product.sku}
              className="mt-1 w-full rounded-lg border bg-white p-2 text-gray-900 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
            />
          </div>

          {/* Quantity */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">Quantity</label>
            <input
              // name="quantity"
              value={product.quantity}
              disabled
              className="mt-1 w-full rounded-lg border bg-white p-2 text-gray-900 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
            />
          </div>

          {/* Status */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">
              Select Adjustment Type
            </label>
            <select
              disabled={isFormDisabled}
              onChange={(e) => {
                setSelectedAdjustment(e.target.value);
              }}
              className={`mt-1 w-full rounded-lg border p-2 ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70 " : ""}`}
            >
              <option selected disabled>
                Select Adjustment Type
              </option>
              <option value={STOCK_ADJUSTMENT_ACTION.ADD}>Add Stock</option>
              <option value={STOCK_ADJUSTMENT_ACTION.REDUCE}>
                Reduce Stock
              </option>
            </select>
          </div>

          {/* Adjust Quantity */}
          {selectedAdjustment ? (
            <div className="col-span-2">
              <label className="text-sm text-gray-600">
                {selectedAdjustment === "ADD" && "Add"}{" "}
                {selectedAdjustment === "REDUCE" && "Reduce"} Quantity By:
              </label>
              <input
                disabled={isFormDisabled}
                name="adjust_quantity"
                {...register("adjusted_quantity")}
                className="mt-1 w-full rounded-lg border bg-white p-2 text-gray-900"
              />
            </div>
          ) : null}

          {/* Reason */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">
              Select Adjustment Reason
            </label>
            <select
              className={`mt-1 w-full rounded-lg border p-2 ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70 " : ""}`}
              disabled={isFormDisabled}
            >
              <option selected disabled>
                Select Adjustment Reason
              </option>
              {STOCK_ADJUSTMENT_REASON.map((Reason) => (
                <option key={Reason} value={Reason}>
                  {Reason}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">Notes (Optional)</label>
            <textarea
              className={`mt-1 w-full rounded-lg border p-2 ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70 " : ""}`}
              disabled={isFormDisabled}
              // aria-rowspan={3}
              rows={3}
              // name="sku"
              // {...register("sku")}
              // disabled
              // value={product.quantity}
              // onChange={handleChange}
              // className="mt-1 w-full rounded-lg border p-2"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={resetselection}
            className="rounded-lg border px-4 py-2 text-sm"
            // disabled={isLoading}
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit(onsubmit)}
            className={`rounded-lg bg-blue-600 px-4 py-2 text-sm text-white ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70" : ""}`}
            disabled={isFormDisabled}
          >
            {selectedAdjustment === "ADD" && "Add"}{" "}
            {selectedAdjustment === "REDUCE" && "Reduce"} Quantity
          </button>
        </div>
      </div>
    </div>
  );
}
