export function OrderAmountDetails({ orderDetails }) {
  const { subtotal, tax_amount, total_amount } = orderDetails;

  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Header / Toggle Button */}

      <div className="border-t border-gray-100 bg-gray-50/50 p-4">
        <p>Item Total {subtotal} </p>
        <p>Tax {tax_amount}</p>

        <p> Total Payable {total_amount}</p>
      </div>
    </div>
  );
}
