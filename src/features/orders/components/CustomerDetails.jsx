export default function CustomerDetails({ orderDetails }) {
  const { customer_name, customer_phone } = orderDetails;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md backdrop-blur-xl">
      <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">
        Customer
      </h3>

      <div className="space-y-1 text-sm text-gray-300">
        <p>
          <span className="text-gray-500">Name:</span> {customer_name}
        </p>

        {customer_phone && (
          <p>
            <span className="text-gray-500">Phone:</span> {customer_phone}
          </p>
        )}
      </div>
    </div>
  );
}
