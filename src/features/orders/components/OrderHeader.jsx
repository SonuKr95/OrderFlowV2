import { useState } from "react";
// import { useOrderItems } from "../hooks/useOrderItems";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// import { useUpdateOrderStatus } from "../hooks/useUpdateOrderStatus";

const STATUS_FLOW = {
  pending: ["confirmed", "cancelled"],
  confirmed: ["packed", "cancelled"],
  packed: ["shipped"],
  shipped: ["delivered"],
};

export function OrderHeader({ orderDetails }) {
  const { order_number, created_at, payment_method, status } = orderDetails;
  console.log(orderDetails);
  const { userRole } = useSelector((state) => state.auth);
  const isViewer = userRole === "viewer";

  // const updateOrderStatus = useUpdateOrderStatus();
  // const params = useParams();
  // params.orderId;
  // const orderId = params.orderId;
  // const { orderId } = useParams();
  // const { data, isLoading, error } = useOrderItems(orderId);
  // const [orderStatus, setorderStatus] = useState("");
  // if (isLoading) return <p>Loading order items...</p>;
  // if (error) return <p>Failed to load items</p>;
  // console.log(data);

  // const handleChange = (e) => {
  //   const statusSelected = e.target.value;
  //   setorderStatus(statusSelected);
  //   const payload = {
  //     orderId,
  //     statusSelected,
  //   };
  //   updateOrderStatus.mutate(payload);
  // };
  // const [{ status } = {}] = data.orderAmount;

  return (
    <div className="flex justify-between">
      <div>
        <h3>{`Order number ${order_number}`} </h3>
        <p>{`Date ${created_at}`}</p>
        <p>{`Payment Method ${payment_method}`}</p>
      </div>
      <div className="">
        <p>Mark order</p>
        <select
          name=""
          id=""
          // value={orderStatus}
          // onChange={handleChange}
          disabled={isViewer}
          className="disabled:cursor-not-allowed"
        >
          <option value="" disabled>
            Select Status
          </option>
          {STATUS_FLOW[status]?.map((s) => (
            <option value={s}>{s}</option>
          ))}
          {/* <option disabled>Select order status</option>

          <option value="Confirmed">Confirmed</option>
          <option value="Shipped">Shipped</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Delivered">Delivered</option> */}
        </select>
        <button
          className="rounded-md bg-amber-300 px-3 py-3 disabled:cursor-not-allowed disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
          disabled={isViewer}
        >
          Mark Order
        </button>
      </div>
    </div>
  );
}
