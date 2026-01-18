import { dotshorizontal } from "../../icons/_index";

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

function Chart({ colStart, colEnd, rowStart, rowEnd }) {
  return (
    <div
      className={`${colStartClasses[colStart]} ${colEndClasses[colEnd]} ${rowStartClasses[rowStart]} ${rowEndClasses[rowEnd]} flex items-center justify-between bg-blue-300`}
    >
      <h2 className="text-xl font-bold">Chart</h2>
      <img src={dotshorizontal} alt="" />
    </div>
  );
}

export default Chart;
