export default function InventoryRow({ name, stock, status }) {
  const statusColor =
    status === "out"
      ? "text-red-600"
      : status === "low"
        ? "text-yellow-600"
        : "text-green-600";

  const statusText =
    status === "out" ? "Out of Stock" : status === "low" ? "Low" : "In Stock";

  return (
    <tr className="border-t">
      <td className="py-2">{name}</td>
      <td>{stock}</td>
      <td className={statusColor}>{statusText}</td>
    </tr>
  );
}
