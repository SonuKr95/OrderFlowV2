import { dotshorizontal } from "..//..//icons/_index";
const colStartClasses = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
};
const rowStartClasses = {
  1: "row-start-1",
  2: "row-start-2",
  3: "row-start-3",
  4: "row-start-4",
};

function Cards({ text, gridColStart, gridRowStart }) {
  return (
    <div
      className={`${colStartClasses[gridColStart]} ${rowStartClasses[gridRowStart]} w-fit`}
    >
      {/* <div className="col-start-3"> */}
      <div className="flex items-center justify-between gap-2.5">
        <div>
          <p className="text-lg font-bold"> {text}</p>
          <p>Last 7 Days</p>
        </div>
        <img src={dotshorizontal} className="-mt-5" alt="" />
        {/* console.log(card) */}
      </div>
      <div className="flex gap-2.5">
        <h3>$350</h3>
        <p>Sales</p>
      </div>
      <p>Previous 7 Days ($500)</p>
    </div>
  );
}

export default Cards;
