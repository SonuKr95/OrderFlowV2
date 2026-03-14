import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  STOCK_ADJUSTMENT_ACTION,
  STOCK_ADJUSTMENT_REASONS_FOR_ADDITION,
  STOCK_ADJUSTMENT_REASONS_FOR_REDUCTION,
} from "../constants/stockAdjustment";
// import { useAdjustStock } from "../hooks/useAdjustStock";
import { useSelector } from "react-redux";

export default function UpdateInventoryModal({
  isOpen,
  selectedProduct,
  setadjustStock,
}) {
  const { userRole } = useSelector((state) => state.auth);
  const isFormDisabled = userRole === "viewer";
  const [selectedAdjustment, setSelectedAdjustment] = useState(null);
  const [updatedQuantity, setupdatedQuantity] = useState(null);

  function handleUpdatedQuantity(q) {
    if (selectedAdjustment === STOCK_ADJUSTMENT_ACTION.ADD) {
      return setupdatedQuantity(selectedProduct.quantity + Number(q));
    }
    if (selectedAdjustment === STOCK_ADJUSTMENT_ACTION.REDUCE) {
      if (Number(q) > selectedProduct.quantity) {
        return setupdatedQuantity(
          "You cannot reduce quantity more than available",
        );
      }
      return setupdatedQuantity(selectedProduct.quantity - Number(q));
    }
  }

  const { register, handleSubmit, reset } = useForm({});

  if (!isOpen) return null;

  function resetselection() {
    setadjustStock(null);
    setSelectedAdjustment(null);
  }

  function payload(formData) {
    const selectedProductId = selectedProduct.id;

    // console.log(formData);
    const payloadData = {
      ...formData,
      id: selectedProductId,
    };
    console.log(payloadData);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={`w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl ${
          isFormDisabled ? " cursor-not-allowed" : ""
        }`}
      >
        <h2 className="mb-5 text-lg font-semibold text-gray-800">
          {`Adjust Stock for ${selectedProduct.product_name}`}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* SKU */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">SKU</label>
            <input
              name="sku"
              disabled
              value={selectedProduct.product_sku}
              className="mt-1 w-full rounded-lg border bg-white p-2 text-gray-900 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
            />
          </div>

          {/* Quantity */}
          <div className="col-span-2">
            <label className="text-sm text-gray-600">Quantity Available</label>
            <input
              // name="quantity"
              value={selectedProduct.quantity}
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
              {...register("adjustment_type")}
              onChange={(e) => {
                reset();
                setupdatedQuantity(null);
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
                name="adjust_quantity_by"
                {...register("adjusted_quantity")}
                onChange={(e) => handleUpdatedQuantity(e.target.value)}
                className="mt-1 w-full rounded-lg border bg-white p-2 text-gray-900"
              />
              <div className="mt-3">
                <span className="text-sm text-gray-600">
                  Updated Quantity:{updatedQuantity}
                </span>
              </div>
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
              {selectedAdjustment === "ADD"
                ? STOCK_ADJUSTMENT_REASONS_FOR_ADDITION.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))
                : STOCK_ADJUSTMENT_REASONS_FOR_REDUCTION.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
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
            onClick={handleSubmit(payload)}
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
