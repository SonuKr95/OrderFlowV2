// import use from "./OrdersListItem";

const colStartClasses = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
};
const colEndClasses = {
  1: "col-end-1",
  2: "col-end-2",
  3: "col-end-3",
  4: "col-end-4",
  5: "col-end-5",
};
const rowStartClasses = {
  1: "row-start-1",
  2: "row-start-2",
  3: "row-start-3",
  4: "row-start-4",
};
const rowEndClasses = {
  1: "row-end-1",
  2: "row-end-2",
  3: "row-end-3",
  4: "row-end-4",
};

// {
//   `${colStartClasses[colStart]} ${colEndClasses[colEnd]} ${rowStartClasses[rowStart]} ${rowEndClasses[rowEnd]}`;
// }
// import useOrders from "../ordersApi";

import { useGetOrders } from "../hooks/useOrders";
import { OrdersItem } from "./OrdersItem";

// src\features\orders\hooks\useOrders.js

function OrdersList({ children, colStart, colEnd, rowStart, rowEnd }) {
  const orders = useGetOrders();
  console.log(orders);

  return (
    <div
      className={`${colStartClasses[colStart]} ${colEndClasses[colEnd]} ${rowStartClasses[rowStart]} ${rowEndClasses[rowEnd]} bg-white`}
    >
      <table className="min-w-full table-fixed divide-y divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50 text-left">
          <tr className="w-full rounded-lg bg-[#EAF8E7]">
            <th className="px-4 py-2 font-medium text-gray-900">Order ID</th>
            <th className="px-4 py-2 font-medium text-gray-900">
              Customer Name
            </th>
            <th className="px-4 py-2 font-medium text-gray-900">Status</th>
            <th className="px-4 py-2 font-medium text-gray-900">
              Total Amount
            </th>
            <th className="px-4 py-2 font-medium text-gray-900">Created At</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {orders?.map((order) => (
            <OrdersItem order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
