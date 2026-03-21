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

import { useFetchOrderList } from "../hooks/useFetchOrderList";
import { OrdersItem } from "./OrdersItem";

// src\features\orders\hooks\useOrders.js

function OrdersList({ children, colStart, colEnd, rowStart, rowEnd }) {
  const { data: orders = [] } = useFetchOrderList();
  console.log(orders);

  return (
    <div
      className={`${colStartClasses[colStart]} ${colEndClasses[colEnd]} ${rowStartClasses[rowStart]} ${rowEndClasses[rowEnd]} bg-white`}
    >
      <table className="min-w-full table-fixed divide-y divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50 text-left">
          {/* className="bg-blue-800 px-4 py-2 text-white" */}
          <tr className="text-sa w-full rounded-lg bg-blue-800 px-4 py-2 font-sans text-white">
            <th className="px-4 py-2 font-medium">Order Number</th>
            <th className="px-4 py-2 font-medium">Customer Name</th>
            <th className="px-4 py-2 font-medium">Status</th>
            <th className="px-4 py-2 font-medium">Total Amount</th>
            <th className="px-4 py-2 font-medium">Created At</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 font-sans">
          {orders?.map((order) => (
            <OrdersItem order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
