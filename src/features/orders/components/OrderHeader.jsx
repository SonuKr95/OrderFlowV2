const STATUS_FLOW = {
  pending: ["confirmed", "cancelled"],
  confirmed: ["packed", "cancelled"],
  packed: ["shipped"],
  shipped: ["delivered"],
};

export default function OrderHeader({ orderDetails }) {
  const { order_number, created_at, payment_method, status } = orderDetails;

  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md backdrop-blur-xl md:flex-row md:items-center">
      {/* Left */}
      <div>
        <h2 className="text-lg font-semibold text-white">
          Order #{order_number}
        </h2>
        <p className="text-sm text-gray-400">{created_at}</p>
        <p className="text-sm text-gray-400">Payment: {payment_method}</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <select className="border-border bg-background text-text-primary placeholder:text-text-muted w-full appearance-none rounded-lg border px-3 py-2 text-sm transition focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
          <option disabled>Select Status</option>
          {STATUS_FLOW[status]?.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-black transition hover:cursor-pointer hover:bg-amber-600">
          Update
        </button>
      </div>
    </div>
  );
}
