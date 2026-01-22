import { useState } from "react";
import { useOrderItems } from "../hooks/useOrderItems";
import { useParams } from "react-router-dom";

import { useUpdateOrderStatus } from "../hooks/useUpdateOrderStatus";

const STATUS_FLOW = {
  pending: ["confirmed", "cancelled"],
  confirmed: ["packed", "cancelled"],
  packed: ["shipped"],
  shipped: ["delivered"],
};

export function OrderHeader() {
  const updateOrderStatus = useUpdateOrderStatus();
  const params = useParams();
  // params.orderId;
  const orderId = params.orderId;
  // const { orderId } = useParams();
  const { data, isLoading, error } = useOrderItems(orderId);
  const [orderStatus, setorderStatus] = useState("");
  if (isLoading) return <p>Loading order items...</p>;
  if (error) return <p>Failed to load items</p>;
  console.log(data);

  const handleChange = (e) => {
    const statusSelected = e.target.value;
    setorderStatus(statusSelected);
    const payload = {
      orderId,
      statusSelected,
    };
    updateOrderStatus.mutate(payload);
  };
  const [{ status } = {}] = data.orderAmount;

  return (
    <div className="flex justify-between">
      <div>
        <h3>Order number</h3>
        <p>Date</p>
        <p>payment mode exact</p>
      </div>
      <div className="">
        <p>Mark order</p>
        <select name="" id="" value={orderStatus} onChange={handleChange}>
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
        <button className="rounded-md bg-amber-300 px-3 py-3">
          Mark Order
        </button>
      </div>
    </div>
  );
}
