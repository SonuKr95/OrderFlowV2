import { formatDateTime } from "../../../utils/dateFormat";
import { Link } from "react-router-dom";
import { tabler_message } from "../../../icons/_index";

export default function OrderRow({ order }) {
  if (!order) return null;
  const { id, order_number, customer_name, status, total_amount, created_at } =
    order;
  const baseclass = "px-4 py-3 text-sm text-text-primary whitespace-nowrap";
  return (
    <>
      <tr className="transition hover:bg-[#2a3447]">
        <td className={baseclass}>{order_number ?? null}</td>
        <td className={baseclass}> {customer_name ?? "null"}</td>
        <td className={baseclass}>{status ?? null}</td>
        <td className={baseclass}> {total_amount ?? null}</td>
        <td className={baseclass}>{formatDateTime(created_at) ?? null}</td>
        <td className="px-4 py-3">
          <div className="flex items-center justify-end gap-2">
            <Link to={`/orders/${id}`} className="hover:cursor-pointer">
              <button className="rounded-md p-2 transition hover:cursor-pointer hover:bg-[#2a3447]">
                <img
                  src={tabler_message}
                  alt="tabler_message"
                  className="h-5 w-5 opacity-70 invert hover:opacity-100"
                />
              </button>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}
