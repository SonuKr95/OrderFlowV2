// import { useOrderItems } from "../hooks/useOrderItems";
import { useOrderItems } from "../hooks/useOrderItems";
// import { getOrderItemsByOrderId } from "../ordersApi";
import { useParams } from "react-router-dom";

function OrderDetailsPage() {
  const { orderId } = useParams();
  console.log(orderId);
  // const OrderItem = useOrderItems();
  const { data, isLoading, error } = useOrderItems(orderId);
  if (isLoading) return <p>Loading order items...</p>;
  if (error) return <p>Failed to load items</p>;
  console.log(data);
  const [
    {
      // order_id,
      // product_id,
      quantity,
      price_at_purchase,
      // updated_at,
      product_name,
    } = {},
  ] = data || [];

  return (
    <div className="pr-4">
      <div className="flex justify-between">
        <div>
          <h3>Order number</h3>
          <p>Date</p>
          <p>payment mode exact</p>
        </div>
        <div className="">
          <p>Order status</p>
          <select name="" id="">
            <option disabled>Select order status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Shipped">Shipped</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Delivered">Delivered</option>
          </select>
          <button className="rounded-md bg-amber-300 px-3 py-3">
            Mark Order
          </button>
        </div>
      </div>

      <table className="min-w-full table-fixed divide-y divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50 text-left">
          <tr className="w-full rounded-lg bg-[#EAF8E7]">
            <th className="w-[60%] px-4 py-2 font-medium text-gray-900">
              Product
            </th>
            <th className="w-[10%] px-4 py-2 font-medium text-gray-900">
              Quantity
            </th>
            <th className="w-[10%] px-4 py-2 font-medium text-gray-900">
              Price
            </th>
            <th className="w-[10%] px-4 py-2 text-right font-medium text-gray-900">
              Total Amount
            </th>
            {/* <th className="px-4 py-2 font-medium text-gray-900">Status</th> */}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          <>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                {product_name ?? null}
              </td>

              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {quantity ?? "null"}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {price_at_purchase ?? null}
              </td>
              <td className="text-right whitespace-nowrap text-gray-700">
                123
              </td>
              {/* <td className="px-4 py-2 whitespace-nowrap text-gray-700">123</td> */}
            </tr>
            <tr className="hover:bg-gray-50">
              <td colSpan={2}></td>
              <td className="px-4 py-2 font-bold whitespace-nowrap text-gray-900">
                Subtotal
              </td>
              <td className="text-right">44</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td colSpan={2}></td>
              <td className="px-4 py-2 font-bold whitespace-nowrap text-gray-900">
                Tax
              </td>
              <td className="text-right">44</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td colSpan={2}></td>
              <td className="px-4 py-2 font-bold whitespace-nowrap text-gray-900">
                Shipping
              </td>
              <td className="text-right">44</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td colSpan={2}></td>
              <td className="px-4 py-2 font-bold whitespace-nowrap text-gray-900">
                Total Payable
              </td>
              <td className="text-right">44</td>
            </tr>

            {/* <button data-productId=>XX</button> */}
          </>
        </tbody>
      </table>
      <div className="w-[40%]">
        <h4>Customer Details</h4>

        <div className="flex justify-between gap-5">
          <div className="">
            <p>Name</p>
            <p>Address</p>
            <p>order time</p>
          </div>
          <div>
            <p>phone number</p>
            <p>email</p>
            <p>payment mode. exact method</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
