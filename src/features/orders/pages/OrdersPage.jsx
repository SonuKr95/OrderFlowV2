import Cards from "..//..//..//components/cards/Cards";
import OrdersList from "../components/OrdersList";

function OrdersPage() {
  return (
    <div className="grid h-screen auto-rows-min grid-cols-4 px-5 py-5">
      <div className="col-start-1 col-end-5 mb-5 flex justify-between bg-green-200">
        <h2>Order List</h2>
        {/* <div className="flex gap-5">
          <button>Add Order</button>
          <button>More Action</button>
        </div> */}
      </div>
      {/* <Cards gridColStart={1} gridRowStart={2} text={"Total Orders"} />
      <Cards gridColStart={2} gridRowStart={2} text={"New Orders"} />
      <Cards gridColStart={3} gridRowStart={2} text={"Completed Orders"} />
      <Cards gridColStart={4} gridRowStart={2} text={"Cancelled Orders"} /> */}
      <OrdersList colStart={1} colEnd={5} rowStart={3} rowEnd={5}></OrdersList>
    </div>
  );
}

export default OrdersPage;
