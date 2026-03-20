export function CustomerDetails({ orderDetails }) {
  const { customer_name, customer_phone } = orderDetails;
  // console.log(customer_phone);
  return (
    <div className="">
      <h4>Customer Details</h4>
      <div className="flex gap-5">
        <div className="">
          <p>{`Name ${customer_name}`}</p>
          {customer_phone && <p>{`Phone ${customer_phone}`}</p>}
        </div>
      </div>
    </div>
  );
}
