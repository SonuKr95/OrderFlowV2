import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decreaseQuantity } from "../../../../store/slices/cartSlice";
import { increaseQuantity } from "../../../../store/slices/cartSlice";

export function OrderItemTable() {
  const products = useSelector((state) => state.cart.products);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  // console.log(product);

  return (
    <table className="min-w-full table-fixed divide-y divide-gray-200 bg-white text-sm">
      <thead className="bg-gray-50 text-left">
        <tr className="w-full rounded-lg bg-[#EAF8E7]">
          <th className="w-[60%] px-4 py-2 font-medium text-gray-900">
            Product
          </th>
          <th className="w-[10%] px-4 py-2 font-medium text-gray-900">SKU</th>
          <th className="w-[10%] px-4 py-2 font-medium text-gray-900">Price</th>
          <th className="w-[10%] px-4 py-2 font-medium text-gray-900">
            Quantity
          </th>
          <th className="w-[10%] px-4 py-2 font-medium text-gray-900">
            Total Amount
          </th>
          {/* <th className="px-4 py-2 font-medium text-gray-900">Status</th> */}
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100">
        {products?.map((product, i) => {
          return (
            <>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  {product.name ?? null}
                </td>

                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {product.sku ?? null}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {product.price ?? null}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {/* {quantity.at(i).count ?? null} */}

                  <div className="flex items-center gap-3">
                    {/* Decrease Button */}
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(product.product_id))
                      }
                      className="rounded bg-gray-200 px-2 py-1 text-lg font-bold hover:bg-red-100"
                    >
                      −
                    </button>

                    {/* Current Count */}
                    <span className="min-w-[20px] text-center font-medium">
                      {quantity[i]?.count ?? 0}
                    </span>

                    {/* Increase Button */}
                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(product.product_id))
                      }
                      className="rounded bg-gray-200 px-2 py-1 text-lg font-bold hover:bg-green-100"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {quantity.at(i).total ?? null}
                </td>

                {/* <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {product.name ?? null}
                </td> */}
                {/* <td className="px-4 py-2 whitespace-nowrap text-gray-700">123</td> */}
              </tr>
            </>
          );
        })}

        {/* <button data-productId=>XX</button> */}
      </tbody>
    </table>
  );
}
