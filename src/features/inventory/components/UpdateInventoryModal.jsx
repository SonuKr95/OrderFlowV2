import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  STOCK_ADJUSTMENT_ACTION,
  STOCK_ADJUSTMENT_REASONS_FOR_ADDITION,
  STOCK_ADJUSTMENT_REASONS_FOR_REDUCTION,
} from "../constants/stockAdjustment";
import { useUpdateInventory } from "../hooks/useUpdateInventory";
import toast from "react-hot-toast";
import { queryClient } from "../../../app/queryClient";
import { useUserRole } from "../../../app/context/hook/useUserRole";

export default function UpdateInventoryModal({
  isOpen,
  selectedProduct,
  setadjustStock,
}) {
  const baseClass = `
w-full rounded-lg border border-border bg-background px-3 py-2 text-sm
text-text-primary placeholder:text-text-muted
focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
disabled:opacity-50 disabled:cursor-not-allowed
transition
`;
  const { userRole } = useUserRole();
  const isViewer = userRole === "viewer";

  const [selectedAdjustment, setSelectedAdjustment] = useState(null);
  const [updatedQuantity, setupdatedQuantity] = useState(null);
  const updateInventoryMutation = useUpdateInventory();
  const handleInventoryUpdate = (payload) => {
    updateInventoryMutation.mutate(payload, {
      onSuccess: async (message) => {
        toast.success(message);
        resetselection();
        queryClient.invalidateQueries({
          queryKey: ["fetch-active-inventory"],
        });
      },
    });
  };

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
    reset();
    setupdatedQuantity(null);
    setSelectedAdjustment(null);
    setadjustStock(null);
  }

  function payload(formData) {
    const { _quantity, _type, _reason } = formData;
    const selectedProductId = selectedProduct.id;
    const payloadData = {
      _quantity: Number(_quantity),
      _reason: _reason,
      _type: _type,
      id: selectedProductId,
    };

    handleInventoryUpdate(payloadData);
  }

  const { onChange, ...rest } = register("_type");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="border-border bg-surface flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border shadow-xl">
        <div className="border-border border-b px-6 py-4">
          {/* HEADER */}
          <h2 className="text-text-primary text-lg font-semibold">
            Adjust Stock for {selectedProduct.product_name}
          </h2>
        </div>

        {/*INPUTS  */}

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            {/* SKU */}
            <div className="col-span-2">
              <label className="text-text-secondary text-sm">SKU</label>
              <input
                name="sku"
                disabled
                value={selectedProduct.product_sku}
                className={`border-border text-text-primary w-full rounded-lg border bg-slate-500 px-3 py-2 text-sm disabled:cursor-not-allowed`}
              />
            </div>

            {/* Quantity */}
            <div className="col-span-2">
              <label className="text-text-secondary text-sm">
                Quantity Available
              </label>
              <input
                // name="quantity"
                value={selectedProduct.quantity}
                disabled
                className={`border-border text-text-primary w-full rounded-lg border bg-slate-500 px-3 py-2 text-sm disabled:cursor-not-allowed`}
              />
            </div>

            {/* Status */}
            <div className="col-span-2">
              <label className="text-text-secondary text-sm">
                Adjustment Type
              </label>
              <select
                value={selectedAdjustment ?? ""}
                name="_type"
                {...rest}
                // {...register("_type")}
                onChange={(e) => {
                  onChange(e);
                  reset({ _quantity: "" });
                  setupdatedQuantity(null);
                  setSelectedAdjustment(e.target.value);
                }}
                className={`${baseClass} appearance-none`}
              >
                <option value="" disabled>
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
                <label className="text-text-secondary text-sm">
                  {selectedAdjustment === "ADD" && "Add"}{" "}
                  {selectedAdjustment === "REDUCE" && "Reduce"} Quantity:
                </label>
                <input
                  name="_quantity"
                  {...register("_quantity", {
                    required: true,
                  })}
                  onChange={(e) => handleUpdatedQuantity(e.target.value)}
                  className={`${baseClass} focus:border-transparent focus:ring-2 focus:ring-violet-500`}
                />
                <div className="mt-3">
                  <span className="text-text-primary text-sm">
                    Updated Quantity Will Be: {updatedQuantity}
                  </span>
                </div>
              </div>
            ) : null}

            {/* Reason */}
            <div className="col-span-2">
              <label className="text-text-secondary text-sm">
                Select Adjustment Reason
              </label>
              <select
                {...register("_reason", {
                  required: true,
                })}
                value={selectedAdjustment ?? ""}
                className={`${baseClass} appearance-none`}
                // disabled={isFormDisabled}
              >
                <option value="" disabled>
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
              <label className="text-text-secondary text-sm">
                Notes (Optional)
              </label>
              <textarea className={`${baseClass} resize-none`} rows={3} />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="border-border flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={resetselection}
            className="border-border text-text-secondary rounded-lg border px-4 py-2 text-sm hover:cursor-pointer hover:bg-[#2a3447]"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit(payload)}
            className={`rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:cursor-pointer hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-gray-400`}
            disabled={updateInventoryMutation.isPending || isViewer}
          >
            {selectedAdjustment === "ADD" && "Add"}
            {selectedAdjustment === "REDUCE" && "Reduce"} Quantity
          </button>
        </div>
      </div>
    </div>
  );
}
