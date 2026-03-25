import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { resetCustomer } from "../../../../app/store/slices/customerSlice";
import CustomerModal from "../../../customers/components/CustomerModal";
import { resetCart } from "../../../../app/store/slices/cartSlice";
import OrderSummary from "./OrderSummary";
import ProductSearchModal from "./ProductSearchModal";
import PaymentMethod from "./PaymentMethod";
import OrderItemTable from "./OrderItemTable";
import { selectCartProducts } from "../../../../app/store/selectors/cartSelectors";
import { buildOrderPayload } from "./buildOrderPayload";
import { useCreateOrder } from "../../hooks/useCreateOrder";
import { useUserRole } from "../../../../app/context/hook/useUserRole";

export default function CreateOrder() {
  const { userRole } = useUserRole();
  const isViewer = userRole === "viewer";
  const dispatch = useDispatch();
  const customerId = useSelector((state) => state.cart.customerId);
  const [customerModal, setCustomerModal] = useState(false);
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
    if (!paymentMethodSelected) {
      toast.error("Select a payment method");
      return;
    }

    const orderData = buildOrderPayload(orderObject);
    createOrder.mutate(orderData, {
      onSuccess: async ({ order_number }) => {
        toast.success(
          `Order Created Successfully with Order Number: ${order_number}`,
        );
        dispatch(resetCart());
        dispatch(resetCustomer());
      },
    });
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* LEFT SIDE */}
      <div className="space-y-6 lg:col-span-2">
        {/* Actions */}
        <div className="bg-surface border-border text-text-primary flex items-center justify-between rounded-2xl border p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Order Setup</h2>
          <div className="flex gap-5">
            <button
              onClick={() => setProductModal(true)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:cursor-pointer hover:bg-blue-700"
            >
              + Add Products
            </button>
            <button
              onClick={() => setCustomerModal(true)}
              className="rounded-lg bg-amber-700 px-4 py-2 text-sm font-medium text-white hover:cursor-pointer hover:bg-amber-600"
            >
              + Add Customer
            </button>
          </div>
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
          className="w-full rounded-lg bg-violet-600 py-4 text-lg font-semibold text-white shadow-md hover:cursor-pointer hover:bg-violet-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={isViewer}
        >
          Create Order
        </button>
      </div>
    </div>
  );
}
