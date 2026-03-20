import { Link } from "react-router-dom";
import { formatDateTime } from "../../../utils/dateFormat";

export function CustomerRow({ customer }) {
  console.log(customer);
  if (!customer) return null;
  const { name, phone_number, address, created_at } = customer || {};
  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {name ?? "null"}
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {phone_number ?? null}
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {address ?? null}
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {formatDateTime(created_at) ?? null}
        </td>
      </tr>
    </>
  );
}
