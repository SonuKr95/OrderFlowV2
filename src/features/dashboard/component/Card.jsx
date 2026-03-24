export default function Card({ title, value, warning, danger }) {
  return (
    <div className="bg-surface rounded-xl p-4 shadow">
      <p className="text-text-primary py-1.5 text-2xl font-bold">{title}</p>
      <p
        className={`text-2xl font-bold ${
          danger
            ? "text-red-600"
            : warning
              ? "text-yellow-400"
              : "text-text-primary"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
