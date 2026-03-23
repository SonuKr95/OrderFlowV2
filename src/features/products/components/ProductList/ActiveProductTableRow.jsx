import { getStockStatus } from "../../constants/stockStatus";
import { formatDateTime } from "../../../../utils/dateFormat";
import { editicon, deleteicon } from "../../../../icons/_index";

function ActiveProductTableRow({ product, onEdit, onArchive }) {
  const stock = getStockStatus(product.quantity);
  const baseclass = "px-4 py-3 text-sm text-text-primary whitespace-nowrap";

  return (
    <>
      <tr className="transition hover:bg-[#2a3447]">
        <td className={baseclass}>{product.sku}</td>
        <td className={baseclass}>{product.name}</td>
        <td className={baseclass}>{product.category_name}</td>
        <td className={baseclass}>{product.selling_price}</td>
        <td className={baseclass}>{product.mrp}</td>
        <td className={baseclass}>
          <span className={stock.className}>{stock.label}</span>
        </td>

        <td className={baseclass}>{product.status}</td>

        <td className={baseclass}>{formatDateTime(product.updated_at)}</td>

        <td>
          <div className="flex items-center justify-center gap-2">
            <button
              className="rounded-md p-2 transition hover:bg-[#2a3447]"
              onClick={() => onEdit(product)}
            >
              <img
                src={editicon}
                alt="edit"
                className="h-5 w-5 opacity-70 invert hover:cursor-pointer hover:opacity-100"
              />
            </button>

            <button
              className="rounded-md p-2 transition hover:bg-[#2a3447]"
              onClick={() => onArchive(product)}
            >
              <img
                src={deleteicon}
                alt="delete"
                className="h-5 w-5 opacity-70 invert hover:cursor-pointer hover:opacity-100"
              />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ActiveProductTableRow;
