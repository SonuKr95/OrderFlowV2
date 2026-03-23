import { formatDateTime } from "../../../utils/dateFormat";

export default function CustomerRow({ customer }) {
  if (!customer) return null;
  const { name, phone_number, address, created_at } = customer || {};
  const baseclass = "px-4 py-3 text-sm text-text-primary whitespace-nowrap";
  return (
    <>
      <tr className="transition hover:bg-[#2a3447]">
        <td className={baseclass}>{name ?? "null"}</td>
        <td className={baseclass}>{phone_number ?? null}</td>
        <td className={baseclass}>{address ?? null}</td>
        <td className={baseclass}>{formatDateTime(created_at) ?? null}</td>
      </tr>
    </>
  );
}
