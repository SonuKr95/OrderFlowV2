// import { useFetchOrderItemsByOrderId } from "../hooks/useFetchOrderItemsByOrderId";
// import { useParams } from "react-router-dom";
export function ProductTable({ orderDetails }) {
  const { items = [] } = orderDetails;
  // const {
  //   data: orderItems = [],
  //   isLoading,
  //   error,
  // } = useFetchOrderItemsByOrderId(orderId);

  // if (isLoading) return <p>Loading order items...</p>;
  // if (error) return <p>Failed to load items</p>;

  return (
    <table className="min-w-full table-fixed divide-y divide-gray-200 bg-white text-sm">
      <thead className="bg-gray-50 text-left">
        <tr className="w-full rounded-lg bg-[#EAF8E7]">
          <th className="w-[60%] px-4 py-2 font-medium text-gray-900">
            Product
          </th>
          <th className="w-[10%] px-4 py-2 font-medium text-gray-900">
            Quantity
          </th>
          <th className="w-[10%] px-4 py-2 font-medium text-gray-900">Price</th>
          <th className="w-[10%] px-4 py-2 text-right font-medium text-gray-900">
            Total Amount
          </th>
          {/* <th className="px-4 py-2 font-medium text-gray-900">Status</th> */}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {items?.map(({ product_name, quantity, unit_price, subtotal }) => (
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
              {product_name ?? null}
            </td>

            <td className="px-4 py-2 whitespace-nowrap text-gray-700">
              {quantity ?? "null"}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-gray-700">
              {unit_price ?? null}
            </td>
            <td className="text-right whitespace-nowrap text-gray-700">
              {subtotal ?? null}
            </td>
          </tr>
        ))}
        <>
          {/* <tr className="hover:bg-gray-50">
            <td colSpan={2}></td>
            <td className="px-4 py-2 font-bold whitespace-nowrap text-gray-900">
              Subtotal
            </td>
            <td className="text-right">{subtotal}</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td colSpan={2}></td>
            <td className="px-4 py-2 font-bold whitespace-nowrap text-gray-900">
              Tax
            </td>
            <td className="text-right">{tax}</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td colSpan={2}></td>
            <td className="px-4 py-2 font-bold whitespace-nowrap text-gray-900">
              Shipping
            </td>
            <td className="text-right">{shipping_cost}</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td colSpan={2}></td>
            <td className="px-4 py-2 font-bold whitespace-nowrap text-gray-900">
              Total Payable
            </td>
            <td className="text-right">{total_amount}</td>
          </tr> */}

          {/* <button data-productId=>XX</button> */}
        </>
      </tbody>
    </table>
  );
}
