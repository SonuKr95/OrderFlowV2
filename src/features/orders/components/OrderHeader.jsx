export function OrderHeader() {
  return (
    <div className="flex justify-between">
      <div>
        <h3>Order number</h3>
        <p>Date</p>
        <p>payment mode exact</p>
      </div>
      <div className="">
        <p>Mark order</p>
        <select name="" id="">
          <option disabled>Select order status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Shipped">Shipped</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button className="rounded-md bg-amber-300 px-3 py-3">
          Mark Order
        </button>
      </div>
    </div>
  );
}
