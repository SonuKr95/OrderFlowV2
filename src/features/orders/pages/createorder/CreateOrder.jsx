import { SelectProduct } from "./_SelectProduct";
import { useState } from "react";
// import { SelectCustomer } from "./SelectCustomer";
// import { CustomerModal } from "../../../customers/components/CustomerModal";
import CustomerModal from "../../../customers/components/CustomerModal";
import { OrderItemTable } from "./OrderItemTable";
import { OrderSummary } from "./OrderSummary";
// import { createOrderNew } from "../../hooks/createOrderNew";
import ProductSearchModal from "./ProductSearchModal";
// import { useFetchActiveProductList } from "../../../products/hooks/useFetchActiveProductList";
import {
  // selectCart,
  selectCartProducts,
  selectSubtotal,
  // selectTax,
  // selectTotalPayable,
} from "../../../../app/store/selectors/cartSelectors";
import { useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import { useCreateOrder } from "../../hooks/_useCreateOrderold";
import { buildOrderPayload } from "./buildOrderPayload";
import toast from "react-hot-toast";
// import { selectCart } from "../../../../store/selectors/cartSelectors";
import { PaymentMethod } from "./PaymentMethod";
import { Navigate, useNavigate } from "react-router-dom";
// import { useOrderItems } from "../../hooks/useOrderItems";
import { useCreateOrder } from "../../hooks/useCreateOrder";

function CreateOrder() {
  const navigate = useNavigate();
  // const { data: products = [] } = useFetchActiveProductList();

  const customerId = useSelector((state) => state.cart.customerId);
  const [customerModal, setCustomerModal] = useState(true);
  const [productModal, setProductModal] = useState(null);
  const paymentMethodSelected = useSelector(
    (state) => state.cart.paymentMethod,
  );
  const product = useSelector(selectCartProducts).length;
  // const createOrderMutation = useCreateOrder();
  const shipping = useSelector((state) => state.cart.shipping);
  const subTotal = useSelector(selectSubtotal);
  // const tax = useSelector(selectTax);
  // const totalPayable = useSelector(selectTotalPayable);
  // const customerId = useSelector((state) => state.cart.customerId);
  console.log(paymentMethodSelected);
  const cartProducts = useSelector(selectCartProducts);
  const { userRole } = useSelector((state) => state.auth);
  const isViewer = userRole === "viewer";
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

    // console.log(cartProducts);

    // console.log(orderObject);
    const orderData = buildOrderPayload(orderObject);
    createOrder.mutate(orderData);

    /*
    createOrderMutation.mutate(orderData, {
      onSuccess: ({ order_id }) => {
        // console.log(order);
        // console.log(`onsuccess is called`);
        // const order_id = order;
        // console.log(products_id);
        toast.success("Order created successfully");
        navigate(`/orders/${order_id}`);
        // clearCart() later
      },
      onError: (error) => {
        toast.error(error.message || "Failed to create order", {
          style: {
            border: "1px solid #ff4b4b",
            padding: "16px",
            color: "#fff",
            backgroundColor: "#1a1a1a", // Dark mode style
            borderRadius: "8px",
          },
          iconTheme: {
            primary: "#ff4b4b",
            secondary: "#fff",
          },
          duration: 4000,
          position: "top-right",
        });
      },
    });
    */
  }
  // const orderObject = { cart, customerId };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:grid-cols-2">
        <button onClick={() => setProductModal(true)} className="bg-amber-200">
          Add Products
        </button>
        <ProductSearchModal
          productModal={productModal}
          setProductModal={setProductModal}
        />
        {/* <SelectProduct /> */}
        <CustomerModal
          customerModal={customerModal}
          setCustomerModal={setCustomerModal}
          setProductModal={setProductModal}
        />
        {/* <SelectCustomer /> */}

        {customerId !== "guest" ? (
          <div>
            <p>Customer Name:{customerName} </p>
            <p>Customer Phone Number:{customerPhoneNumber} </p>
          </div>
        ) : (
          "Guest Checkout"
        )}
      </div>

      <div className="lg:col-span-2">
        <OrderItemTable />
      </div>

      <div className="col-start-3 row-start-2">
        <OrderSummary />
        <PaymentMethod />
        <button
          disabled={isViewer}
          onClick={handleCreateOrder}
          type="submit"
          className="bg-secondary-brand-surf-crest w-full rounded-lg p-5 text-xl font-bold hover:cursor-pointer disabled:cursor-not-allowed disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
        >
          Create Order
        </button>
      </div>
    </div>
  );
}

export default CreateOrder;
