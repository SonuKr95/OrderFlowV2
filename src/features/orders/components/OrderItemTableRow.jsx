export default function OrderItemTableRow({ item }) {
  if (!item) return null;
  const { product_name, quantity, unit_price, subtotal } = item || {};
  const baseclass = "px-4 py-3 text-sm text-text-primary whitespace-nowrap";
  return (
    <>
      <tr className="transition hover:bg-[#2a3447]">
        <td className={baseclass}> {product_name ?? null}</td>
        <td className={baseclass}> {quantity ?? "null"}</td>
        <td className={baseclass}> {unit_price ?? null}</td>
        <td className={baseclass}> {subtotal ?? null}</td>
      </tr>
    </>
  );
}
