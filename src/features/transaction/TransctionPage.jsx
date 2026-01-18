import Cards from "../../components/ui/cards/Cards";
import OrdersList from "../orders/OrdersList";

function TransctionPage() {
  return (
    <div className="grid h-screen auto-rows-min grid-cols-4 gap-2.5 px-5 py-5">
      {" "}
      <Cards gridColStart={1} gridRowStart={2} text={"Total Revenue"} />
      <Cards gridColStart={2} gridRowStart={2} text={"Completed Transctions"} />
      <Cards gridColStart={3} gridRowStart={2} text={"Pending Transctions"} />
      <Cards gridColStart={4} gridRowStart={2} text={"Failed Transctions"} />
      <OrdersList colStart={1} colEnd={5} rowStart={3} rowEnd={5} />
    </div>
  );
}

export default TransctionPage;
