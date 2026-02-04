import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetCustomers } from "../../../customers/hooks/useGetCustomers";
import { useCreateCustomer } from "../../../customers/hooks/useCreateCustomer";
import { setCustomer } from "../../../../app/store/slices/cartSlice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function SelectCustomer() {
  const dispatch = useDispatch();
  const { mutate, isPending } = useCreateCustomer();
  const { data: customers = [] } = useGetCustomers();
  const selectedCustomerId = useSelector((state) => state.cart.customerId);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone_number: "",
      address: "",
    },
  });

  const onsubmit = (formData) => {
    mutate(formData, {
      onSuccess: (customer) => {
        setShowModal(false);
        dispatch(setCustomer(customer.id));
        reset();
        toast.success(`Customer ${customer.name} is created successfully`);
      },
      onError: (error) => {
        toast.error(error.message || "Failed to create customer");
      },
    });
  };
  const handleSelectChange = (e) => {
    const value = e.target.value || null;
    dispatch(setCustomer(value));
  };

  const handleCancel = () => {
    reset();
    setShowModal(false);
  };

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <label className="font-medium">Customer (optional)</label>

      <div className="flex gap-2">
        <select
          value={selectedCustomerId ?? ""}
          onChange={handleSelectChange}
          className="w-full rounded border px-2 py-1"
        >
          <option value="">Walk-in customer</option>

          {customers.map((customer) => (
            <option
              key={customer.id}
              disabled={selectedCustomerId === customer.id}
              value={customer.id}
            >
              {customer.name} — {customer.phone_number}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="rounded border bg-gray-100 px-3 py-1"
        >
          + Add
        </button>
      </div>

      {/* Create Customer Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-5 text-lg font-semibold text-gray-800">
              Create Customer
            </h2>
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-sm text-gray-600">Customer Name</label>
                  <input
                    {...register("name", {
                      required: "Customer name is required",
                    })}
                    className={`mt-1 w-full rounded-lg border p-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.name && (
                    <span className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="text-sm text-gray-600">Phone number</label>
                  <input
                    {...register("phone_number", {
                      required: "Phone number is required",
                    })}
                    className={`mt-1 w-full rounded-lg border p-2 ${errors.phone_number ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.phone_number && (
                    <span className="mt-1 text-xs text-red-500">
                      {errors.phone_number.message}
                    </span>
                  )}
                </div>

                <div className="col-span-2">
                  {" "}
                  <label className="text-sm text-gray-600">
                    Address (optional)
                  </label>
                  <textarea
                    {...register("address")}
                    className="mt-1 w-full rounded-lg border p-2"
                    rows={2}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-lg bg-blue-400 px-4 py-4 text-sm text-white hover:cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className={`rounded-lg px-4 py-4 text-sm text-white transition-colors ${
                    isPending
                      ? "cursor-not-allowed bg-gray-400" // 2. Disabled styles
                      : "bg-blue-600 hover:cursor-pointer hover:bg-blue-700" // 3. Active styles
                  }`}
                >
                  {isPending ? "Creating Customer" : "Create Customer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
