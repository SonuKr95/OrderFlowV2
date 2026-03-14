import { getStockStatus } from "../../constants/stockStatus";
import { formatDateTime } from "../../../../utils/dateFormat";
import { editicon, deleteicon } from "../../../../icons/_index";

function ActiveProductTableRow({ product, onEdit, onArchive }) {
  const stock = getStockStatus(product.quantity);

  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-700">
          {product.sku}
        </td>

        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {product.name}
        </td>

        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {product.category_name}
        </td>

        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {product.selling_price}
        </td>

        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {product.mrp}
        </td>

        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          <span className={stock.className}>{stock.label}</span>
        </td>

        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {product.status}
        </td>

        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {formatDateTime(product.updated_at)}
        </td>

        <td>
          <span className="flex justify-around">
            <button onClick={() => onEdit(product)}>
              <img src={editicon} alt="edit" />
            </button>

            <button onClick={() => onArchive(product)}>
              <img src={deleteicon} alt="delete" />
            </button>
          </span>
        </td>
      </tr>
    </>
  );
}

export default ActiveProductTableRow;
