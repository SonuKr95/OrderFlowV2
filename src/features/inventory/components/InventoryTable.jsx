import { getStockStatus } from "../../products/constants/stockStatus";
import { formatDateTime } from "../../../utils/dateFormat";
import { settings } from "../../../icons/_index";

export default function InventoryTable({ inventoryRecord, setadjustStock }) {
  const stock = getStockStatus(inventoryRecord.quantity);
  const baseclass = "px-4 py-3 text-sm text-text-primary whitespace-nowrap";
  return (
    <tr key={inventoryRecord.id} className="transition hover:bg-[#2a3447]">
      <td className={baseclass}>{inventoryRecord.product_sku ?? null}</td>
      <td className={baseclass}>{inventoryRecord.product_name ?? "null"}</td>
      <td className={baseclass}>{inventoryRecord.quantity ?? null}</td>
      <td className={baseclass}>
        <span className={stock.className}>{stock.label}</span>
      </td>

      <td className={baseclass}>
        {formatDateTime(inventoryRecord.updated_at) ?? null}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center justify-end gap-2">
          <button
            className="rounded-md p-2 transition hover:cursor-pointer hover:bg-[#2a3447]"
            onClick={() => setadjustStock(inventoryRecord)}
          >
            <img
              src={settings}
              alt="editicon"
              className="h-5 w-5 opacity-70 invert hover:opacity-100"
            />
          </button>
        </div>
      </td>
    </tr>
  );
}
