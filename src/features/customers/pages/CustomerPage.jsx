import Cards from "../../components/ui/cards/Cards";
import Chart from "../../../components/ui/Chart";
import OrdersList from "../orders/OrdersList";

import CustomerInfoCard from "../components/CustomerInfoCard";

function CustomerPage() {
  return (
    <div className="grid h-screen grid-cols-3 gap-5 px-5 py-5">
      <div className="flex flex-col gap-2.5">
        <Cards gridColStart={1} gridRowStart={2} text={"Total Customers"} />
        <Cards gridColStart={2} gridRowStart={2} text={"New Customers"} />
        <Cards gridColStart={3} gridRowStart={2} text={"Visitor"} />
      </div>
      <Chart colStart={2} colEnd={4} rowStart={1} rowEnd={5} />
      <OrdersList colStart={1} colEnd={3} rowStart={3} rowEnd={5}>
        <div className="flex justify-around">
          <p>Customer Id</p>
          <p>Name</p>
          <p>Phone</p>
          <p>Order Count</p>
          <p>Total Spend</p>
          <p>Status</p>
          <p>Action</p>
        </div>
      </OrdersList>
      <CustomerInfoCard />
    </div>
  );
}

export default CustomerPage;
