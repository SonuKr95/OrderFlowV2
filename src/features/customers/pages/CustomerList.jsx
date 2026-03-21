// import use from "./OrdersListItem";
import { CustomerRow } from "../components/CustomerRow";
import { useFecthCustomers } from "../hooks/useFecthCustomers";

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

function CustomerList({ children, colStart, colEnd, rowStart, rowEnd }) {
  const { data: customers = [], isLoading } = useFecthCustomers();
  // console.log(orders);
  if (isLoading) return <div>Fetching customer</div>;
  console.log(customers);

  return (
    <div
      className={`${colStartClasses[colStart]} ${colEndClasses[colEnd]} ${rowStartClasses[rowStart]} ${rowEndClasses[rowEnd]} bg-white`}
    >
      <table className="min-w-full table-fixed divide-y divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50 text-left">
          <tr className="text-sa w-full rounded-lg bg-blue-800 px-4 py-2 font-sans text-white">
            <th className="px-4 py-2 font-medium">Name</th>
            <th className="px-4 py-2 font-medium">Number</th>
            <th className="px-4 py-2 font-medium">Address</th>

            <th className="px-4 py-2 font-medium">Created On</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          <CustomerRow />
          {customers?.map((c) => (
            <CustomerRow key={c.id} customer={c} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
