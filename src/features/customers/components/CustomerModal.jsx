import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateCustomer } from "../hooks/useCreateCustomer";
import { useForm } from "react-hook-form";
import { useFecthCustomers } from "../hooks/useFecthCustomers";
import toast from "react-hot-toast";
import { setCustomerId } from "../../../app/store/slices/cartSlice";
import { setCustomer } from "../../../app/store/slices/customerSlice";
import { queryClient } from "../../../app/queryClient";

export default function CustomerModal({
  customerModal,
  setCustomerModal,
  setProductModal,
}) {
  const baseClass = `
w-full rounded-lg border border-border bg-background px-3 py-2 text-sm
text-text-primary placeholder:text-text-muted
focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
disabled:opacity-50 disabled:cursor-not-allowed
transition
`;
  const { data: customers = [] } = useFecthCustomers();
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
    // setProductModal(true);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      {/* Modal */}
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#020617]/80 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="text-lg font-semibold text-white">
            Select or Create Customer
          </h2>

          <button
            onClick={() => setCustomerModal(null)}
            className="rounded-md px-2 py-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="grid h-[520px] grid-cols-2">
          {/* LEFT: Customer List */}
          <div className="flex flex-col border-r border-white/10 p-5">
            {/* Search */}
            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-transparent focus:ring-2 focus:ring-violet-500"
            />

            {/* List */}
            <div className="flex-1 space-y-2 overflow-y-auto pr-1">
              {/* Guest */}
              <div
                onClick={() => {
                  dispatch(setCustomerId("guest"));
                  // setProductModal(true);
                  setCustomerModal(null);
                }}
                className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-gray-300 transition hover:bg-white/10"
              >
                Walk-in customer / Guest Checkout
              </div>

              {/* Customers */}
              {customers?.map((customer) => (
                <div
                  key={customer.id}
                  onClick={() => customerDispatcher(customer)}
                  className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                >
                  <p className="text-sm font-medium text-white">
                    {customer.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {customer.phone_number}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Create Customer */}
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="flex h-full flex-col gap-4 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                Create New Customer
              </h3>

              <input
                {...register("name", {
                  required: true,
                })}
                placeholder="Customer Name"
                className={`${baseClass} focus:border-transparent focus:ring-2 focus:ring-violet-500`}
              />

              <input
                maxLength={10}
                {...register("phone_number", {
                  required: true,
                })}
                placeholder="Phone Number"
                className={`${baseClass} focus:border-transparent focus:ring-2 focus:ring-violet-500`}
              />

              <textarea
                {...register("address")}
                rows={5}
                placeholder="Address (Optional)"
                className={`${baseClass} focus:border-transparent focus:ring-2 focus:ring-violet-500`}
              />

              {/* CTA */}
              <button
                type="submit"
                className={`rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:cursor-pointer hover:bg-violet-700`}
              >
                Create Customer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-md">
  //     <div className="w-[900px] rounded-xl bg-white shadow-xl">
  //       {/* Header */}

  //       <div className="border-b px-6 py-4 text-lg font-semibold">
  //         Select or Create Customer
  //         <button
  //           onClick={() => setCustomerModal(null)}
  //           className="text-xl font-bold text-gray-500 hover:text-black"
  //         >
  //           X
  //         </button>
  //       </div>

  //       {/* Body */}
  //       <div className="grid h-[500px] grid-cols-2">
  //         {/* LEFT SIDE */}
  //         <div className="flex flex-col border-r p-4">
  //           <input
  //             type="text"
  //             placeholder="Search customers..."
  //             value={search}
  //             onChange={(e) => setSearch(e.target.value)}
  //             className="mb-4 rounded-md border px-3 py-2"
  //           />

  //           <div className="flex-1 space-y-2 overflow-y-auto">
  //             <div
  //               className="cursor-pointer rounded border p-3 hover:bg-gray-50"
  //               onClick={() => {
  //                 dispatch(setCustomerId("guest"));
  //                 setProductModal(true);
  //                 setCustomerModal(null);
  //               }}
  //             >
  //               Walk-in customer / Guest Checkout
  //             </div>
  //             {customers?.map((customer) => (
  //               <div
  //                 key={customer.id}
  //                 onClick={() => {
  //                   customerDispatcher(customer);
  //                 }}
  //                 className="cursor-pointer rounded border p-3 hover:bg-gray-50"
  //               >
  //                 {customer.name}
  //                 Phone No: {customer.phone_number}
  //               </div>
  //             ))}

  //             {/* <div className="cursor-pointer rounded border p-3 hover:bg-gray-50">
  //               Robert
  //             </div> */}
  //           </div>
  //         </div>

  //         {/* RIGHT SIDE */}
  //         <form onSubmit={handleSubmit(onsubmit)}>
  //           <div className="flex flex-col gap-3 p-4">
  //             <input
  //               {...register("name")}
  //               placeholder="Customer Name"
  //               className="rounded border px-3 py-2"
  //             />

  //             <input
  //               // type="number"
  //               maxLength={10}
  //               {...register("phone_number")}
  //               placeholder="Phone Number"
  //               className="rounded border px-3 py-2"
  //             />

  //             <textarea
  //               {...register("address")}
  //               placeholder="Address (Optional)"
  //               className="rounded border px-3 py-2"
  //             />

  //             <button
  //               type="submit"
  //               className="mt-auto rounded bg-blue-600 py-2 text-white"
  //             >
  //               Create Customer
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
}
