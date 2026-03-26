import { Link } from "react-router-dom";

export default function OrderItem({ order }) {
  return (
    <Link to={`/orders/${order.id}`}>
      <li className="mt-1 flex justify-between border-b pb-2">
        <div>
          <p className="font-medium">{order.order_number}</p>
          <p className="text-text-secondary text-sm">{order.customer_name}</p>
        </div>
        <p className="font-semibold">{order.total_amount}</p>
      </li>
    </Link>
  );
}
