export default function Card({ title, value, warning, danger }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p
        className={`text-2xl font-bold ${
          danger
            ? "text-red-600"
            : warning
              ? "text-yellow-600"
              : "text-gray-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
