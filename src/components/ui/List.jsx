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

function List({ columns, children, colStart, colEnd, rowStart, rowEnd }) {
  // console.log("rendering list");
  // console.log(columns);
  if (!Array.isArray(columns)) return null;
  return (
    <div
      className={`${colStartClasses[colStart]} ?? '' ${colEndClasses[colEnd]} ?? '' ${rowStartClasses[rowStart]} ?? '' ${rowEndClasses[rowEnd]} ?? '' rounded-lg border border-gray-200 bg-white`}
    >
      <table className="min-w-full text-sm">
        <thead className="bg-[#EAF8E7]">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-2 font-medium text-gray-700 ${
                  col.align === "right" ? "text-right" : "text-left"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 transition-colors">
          {children}
        </tbody>
      </table>
    </div>
  );
}

export default List;
