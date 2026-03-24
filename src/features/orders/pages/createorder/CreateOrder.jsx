import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import CustomerModal from "../../../customers/components/CustomerModal";
import OrderSummary from "./OrderSummary";
import ProductSearchModal from "./ProductSearchModal";
import PaymentMethod from "./PaymentMethod";
import OrderItemTable from "./OrderItemTable";
import { selectCartProducts } from "../../../../app/store/selectors/cartSelectors";
import { buildOrderPayload } from "./buildOrderPayload";
import { useCreateOrder } from "../../hooks/useCreateOrder";

function CreateOrder() {
  const customerId = useSelector((state) => state.cart.customerId);
  const [customerModal, setCustomerModal] = useState(true);
  const [productModal, setProductModal] = useState(false);
  const paymentMethodSelected = useSelector(
    (state) => state.cart.paymentMethod,
  );
  const product = useSelector(selectCartProducts).length;
  const cartProducts = useSelector(selectCartProducts);

  const orderObject = {
    products: cartProducts,
    customer_id: customerId,
    payment_method: paymentMethodSelected,
  };

  const createOrder = useCreateOrder();
  const customerName = useSelector((state) => state.customer.customerName);
  const customerPhoneNumber = useSelector(
    (state) => state.customer.cutomerPhoneNumber,
  );

  function handleCreateOrder() {
    if (!customerId) {
      toast.error("Select a customer");
      return;
    }
    if (!product) {
      toast.error("Cart is empty");
      return;
    }

    const orderData = buildOrderPayload(orderObject);
    createOrder.mutate(orderData);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* LEFT SIDE */}
      <div className="space-y-6 lg:col-span-2">
        {/* Actions */}
        <div className="bg-surface border-border text-text-primary flex items-center justify-between rounded-2xl border p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Order Setup</h2>

          <button
            onClick={() => setProductModal(true)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + Add Products
          </button>
        </div>

        <ProductSearchModal
          productModal={!!productModal}
          setProductModal={setProductModal}
        />

        {/* Customer */}
        <CustomerModal
          customerModal={!!customerModal}
          setCustomerModal={setCustomerModal}
          setProductModal={setProductModal}
        />
        <div className="bg-surface text-text-primary border-border rounded-2xl p-5 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold">Customer Details</h3>

          {customerId !== "guest" ? (
            <div className="space-y-1 text-sm">
              <p className="">Name : {customerName}</p>
              <p className="">Phone Number : {customerPhoneNumber}</p>
            </div>
          ) : (
            <p className="">Guest Checkout</p>
          )}
        </div>

        {/* Order Items */}
        <div className="rounded-2xl shadow-sm">
          <OrderItemTable />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">
        <div className="bg-surface rounded-2xl border p-5 shadow-sm">
          <OrderSummary />
        </div>

        <div className="bg-surface rounded-2xl border p-5 shadow-sm">
          <PaymentMethod />
        </div>

        <button
          onClick={handleCreateOrder}
          className="w-full rounded-lg bg-violet-600 py-4 text-lg font-semibold text-white shadow-md hover:cursor-pointer hover:bg-violet-700 active:scale-[0.98]"
        >
          Create Order
        </button>
      </div>
    </div>
  );

  // return (
  //   <div className="bg-surface min-h-screen p-6">
  //     <div className="mx-auto max-w-7xl space-y-6">
  //       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
  //         <div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:grid-cols-2">
  //           <button
  //             onClick={() => setProductModal(true)}
  //             className="bg-amber-200"
  //           >
  //             Add Products
  //           </button>
  //           <ProductSearchModal
  //             productModal={productModal}
  //             setProductModal={setProductModal}
  //           />
  //           {/* <SelectProduct /> */}
  //           <CustomerModal
  //             customerModal={customerModal}
  //             setCustomerModal={setCustomerModal}
  //             setProductModal={setProductModal}
  //           />
  //           {/* <SelectCustomer /> */}

  //           {customerId !== "guest" ? (
  //             <div>
  //               <p>Customer Name:{customerName} </p>
  //               <p>Customer Phone Number:{customerPhoneNumber} </p>
  //             </div>
  //           ) : (
  //             "Guest Checkout"
  //           )}
  //         </div>

  //         <div className="lg:col-span-2">
  //           <OrderItemTable />
  //         </div>

  //         <div className="col-start-3 row-start-2">
  //           <OrderSummary />
  //           <PaymentMethod />
  //           <button
  //             // disabled={isViewer}
  //             onClick={handleCreateOrder}
  //             type="submit"
  //             className="bg-secondary-brand-surf-crest w-full rounded-lg p-5 text-xl font-bold hover:cursor-pointer disabled:cursor-not-allowed disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
  //           >
  //             Create Order
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default CreateOrder;
