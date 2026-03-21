export default function OrderItem({ id, name, amount }) {
  return (
    <li className="flex justify-between border-b pb-2">
      <div>
        <p className="font-medium">{id}</p>
        <p className="text-sm text-gray-500">{name}</p>
      </div>
      <p className="font-semibold">{amount}</p>
    </li>
  );
}
