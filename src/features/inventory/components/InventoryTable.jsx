import { getStockStatus } from "../../products/constants/stockStatus";
import { formatDateTime } from "../../../utils/dateFormat";
import { settings } from "../../../icons/_index";

export default function InventoryTable({ inventoryRecord, setadjustStock }) {
  const stock = getStockStatus(inventoryRecord.quantity);
  return (
    <tr key={inventoryRecord.id} className="hover:bg-gray-50">
      <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-700">
        {inventoryRecord.product_sku ?? null}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">
        {inventoryRecord.product_name ?? "null"}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">
        {inventoryRecord.quantity ?? null}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">
        <span className={stock.className}>{stock.label}</span>
      </td>

      <td className="px-4 py-2 whitespace-nowrap text-gray-700">
        {formatDateTime(inventoryRecord.updated_at) ?? null}
      </td>
      <td>
        <div className="right flex flex-wrap items-center justify-around">
          <button onClick={() => setadjustStock(inventoryRecord)}>
            <img src={settings} alt="editicon" />
          </button>
        </div>
      </td>
    </tr>
  );
}
