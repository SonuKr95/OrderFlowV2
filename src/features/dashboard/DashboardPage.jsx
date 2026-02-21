import Cards from "../../components/cards/Cards";
import Chart from "../../components/ui/Chart";
// import Transctions from "../../components/ui/Transctions";
import ProductMini from "..//..//features/products/components/ProductMini";
import StockAlertMini from "..//..//features/products/components/StockAlertMini";

function DashboardPage() {
  return (
    <div className="grid h-screen grid-cols-3 grid-rows-3 gap-x-5 gap-y-5 px-10 py-11">
      <Cards gridColStart={1} gridRowStart={1} text={"Sales"} />
      <Cards gridColStart={2} gridRowStart={1} text={"Orders"} />
      <Cards gridColStart={3} gridRowStart={1} text={"Pending & Cancelled"} />
      <Chart colStart={1} colEnd={3} rowStart={2} rowEnd={4} />
      <ProductMini />
      {/* <Transctions /> */}
      <StockAlertMini />
    </div>
  );
  // return <p>Dashboard</p>;
}

export default DashboardPage;
