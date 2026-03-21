import OrdersList from "../components/OrdersList";

function OrdersPage() {
  return (
    <div className="grid-row-2 relative grid">
      <OrdersList colStart={1} colEnd={5} rowStart={3} rowEnd={5}></OrdersList>
    </div>
  );
}

export default OrdersPage;
