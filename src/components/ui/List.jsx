import { useList } from "../../app/context/hook/useList";

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

function List({ children, colStart, colEnd, rowStart, rowEnd }) {
  const { list } = useList();
  console.log(list);

  return (
    <div
      className={`${colStartClasses[colStart]} ${colEndClasses[colEnd]} ${rowStartClasses[rowStart]} ${rowEndClasses[rowEnd]} bg-white`}
    >
      <table className="min-w-full table-fixed divide-y divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50 text-left">
          <tr className="w-full rounded-lg bg-[#EAF8E7]">
            <th className="px-4 py-2 font-medium text-gray-900">SKU</th>
            <th className="px-4 py-2 font-medium text-gray-900">
              {list === "productlist" ? "Product" : "Name"}
            </th>
            <th className="px-4 py-2 font-medium text-gray-900">
              {" "}
              {list === "productlist" ? "Price" : "Quantity"}
            </th>
            {/* <th className="px-4 py-2 font-medium text-gray-900">Category</th> */}
            {list === "productlist" ? (
              <th className="px-4 py-2 font-medium text-gray-900">Added on</th>
            ) : null}
            <th className="px-4 py-2 font-medium text-gray-900">Updated on</th>
            <th className="px-4 py-2 font-medium text-gray-900">
              Stock Status
            </th>
            <th className="px-4 py-2 font-medium text-gray-900">Action</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">{children}</tbody>
      </table>
    </div>
  );
}

export default List;
