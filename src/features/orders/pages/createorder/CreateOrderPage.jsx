import { SelectProduct } from "./SelectProduct";
import { SelectCustomer } from "./SelectCustomer";
import { OrderItemTable } from "./OrderItemTable";
import { OrderSummary } from "./OrderSummary";
import {
  selectCart,
  selectCartProducts,
  selectSubtotal,
  selectTax,
  selectTotalPayable,
} from "../../../../app/store/selectors/cartSelectors";
import { useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
import { useCreateOrder } from "../../hooks/useCreateOrder";
import { buildOrderPayload } from "./buildOrderPayload";
import toast from "react-hot-toast";
// import { selectCart } from "../../../../store/selectors/cartSelectors";
import { PaymentMethod } from "./PaymentMethod";
import { Navigate, useNavigate } from "react-router-dom";
import { useOrderItems } from "../../hooks/useOrderItems";

function CreateOrderPage() {
  const navigate = useNavigate();
  const customerId = useSelector((state) => state.cart.customerId);
  const product = useSelector(selectCartProducts).length;
  const createOrderMutation = useCreateOrder();
  const shipping = useSelector((state) => state.cart.shipping);
  const subTotal = useSelector(selectSubtotal);
  const tax = useSelector(selectTax);
  const totalPayable = useSelector(selectTotalPayable);
  // const customerId = useSelector((state) => state.cart.customerId);
  const cart = useSelector(selectCart);
  const orderObject = {
    ...cart,
    subTotal,
    tax,
    shipping,
    totalPayable,
  };

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
    // const { products } = buildOrderPayload(orderObject);
    // console.log(payload);
    // console.log(products);

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
  }
  // const orderObject = { cart, customerId };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:grid-cols-2">
        <SelectCustomer />
        <SelectProduct />
      </div>

      <div className="lg:col-span-2">
        <OrderItemTable />
      </div>

      <div className="col-start-3 row-start-2">
        <OrderSummary />
        <PaymentMethod />
        <button
          // disabled={product ? false : true}
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

export default CreateOrderPage;
