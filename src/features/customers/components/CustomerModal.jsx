import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateCustomer } from "../hooks/useCreateCustomer";
import { useForm } from "react-hook-form";
import { useFecthCustomers } from "../hooks/useFecthCustomers";
import toast from "react-hot-toast";
import { setCustomerId } from "../../../app/store/slices/cartSlice";
import { setCustomer } from "../../../app/store/slices/customerSlice";
import { queryClient } from "../../../app/queryClient";

function CustomerModal({ customerModal, setCustomerModal, setProductModal }) {
  const { data: customers = [] } = useFecthCustomers();
  console.log(customers);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const createCustomer = useCreateCustomer();

  function customerDispatcher(customer) {
    dispatch(setCustomerId(customer.id));
    dispatch(setCustomer(customer));
    setCustomerModal(null);
    setProductModal(true);
  }

  function onsubmit(formData) {
    createCustomer.mutate(formData, {
      onSuccess: async (customer) => {
        customerDispatcher(customer);

        reset();
        queryClient.invalidateQueries({
          queryKey: ["customers"],
        });
        toast.success("Customer created successfully");
        setCustomerModal(null);
        setProductModal(true);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }
  if (!customerModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-[900px] rounded-xl bg-white shadow-xl">
        {/* Header */}

        <div className="border-b px-6 py-4 text-lg font-semibold">
          Select or Create Customer
          <button
            onClick={() => setCustomerModal(null)}
            className="text-xl font-bold text-gray-500 hover:text-black"
          >
            X
          </button>
        </div>

        {/* Body */}
        <div className="grid h-[500px] grid-cols-2">
          {/* LEFT SIDE */}
          <div className="flex flex-col border-r p-4">
            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4 rounded-md border px-3 py-2"
            />

            <div className="flex-1 space-y-2 overflow-y-auto">
              <div
                className="cursor-pointer rounded border p-3 hover:bg-gray-50"
                onClick={() => {
                  dispatch(setCustomerId("guest"));
                  setProductModal(true);
                  setCustomerModal(null);
                }}
              >
                Walk-in customer / Guest Checkout
              </div>
              {customers?.map((customer) => (
                <div
                  key={customer.id}
                  onClick={() => {
                    customerDispatcher(customer);
                  }}
                  className="cursor-pointer rounded border p-3 hover:bg-gray-50"
                >
                  {customer.name}
                  Phone No: {customer.phone_number}
                </div>
              ))}

              {/* <div className="cursor-pointer rounded border p-3 hover:bg-gray-50">
                Robert
              </div> */}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="flex flex-col gap-3 p-4">
              <input
                {...register("name")}
                placeholder="Customer Name"
                className="rounded border px-3 py-2"
              />

              <input
                // type="number"
                maxLength={10}
                {...register("phone_number")}
                placeholder="Phone Number"
                className="rounded border px-3 py-2"
              />

              <textarea
                {...register("address")}
                placeholder="Address (Optional)"
                className="rounded border px-3 py-2"
              />

              <button
                type="submit"
                className="mt-auto rounded bg-blue-600 py-2 text-white"
              >
                Create Customer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CustomerModal;
