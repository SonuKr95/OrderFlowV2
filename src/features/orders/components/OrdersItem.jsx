import { Link } from "react-router-dom";

export function OrdersItem({ order }) {
  const { order_id, customer_name, status, total_amount, created_at } = order;
  console.log(order);

  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
          <Link to={`/orders/${order_id}`} className="hover:cursor-pointer">
            {order_id ?? null}
          </Link>
        </td>

        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {customer_name ?? "null"}
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {status ?? null}
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {total_amount ?? null}
        </td>
        {/* <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {formatDateTime(product.updated_at) ?? null}
        </td> */}

        {/* <td className="px-4 py-2 whitespace-nowrap">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
            In Stock
          </span>
        </td> */}
        {/* <td>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => handleEditBtnClicked(product)}>
              <img src={editicon} alt="" />
            </button>
            <button
              onClick={() => deleteProduct.mutate(product.product_id)}
              // data-product-id={prod.product_id}
            >
              <img src={deleteicon} alt="" />
            </button>
          </div>
        </td> */}
      </tr>

      {/* <button data-productId=>XX</button> */}
    </>
  );
}
