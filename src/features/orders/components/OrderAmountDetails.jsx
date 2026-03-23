export default function OrderAmountDetails({ orderDetails }) {
  const { subtotal, tax_amount, total_amount } = orderDetails;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md backdrop-blur-xl">
      <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-400 uppercase">
        Amount Summary
      </h3>

      <div className="space-y-2 text-sm text-gray-300">
        <div className="flex justify-between">
          <span className="text-gray-400">Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Tax</span>
          <span>₹{tax_amount}</span>
        </div>

        <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-base font-semibold text-white">
          <span>Total</span>
          <span>₹{total_amount}</span>
        </div>
      </div>
    </div>
  );
}
