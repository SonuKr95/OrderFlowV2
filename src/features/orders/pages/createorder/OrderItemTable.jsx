import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../../../app/store/slices/cartSlice";
import List from "../../../../components/ui/List";

import { createOrderTableColumns } from "./createOrderTableColumns";
export default function OrderItemTable() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <List columns={createOrderTableColumns}>
      {products?.map((product) => {
        return (
          <>
            <tr
              key={product.id}
              className="text-text-primary hover:bg-border hover:cursor-pointer"
            >
              <td className="px-4 py-2 font-medium whitespace-pre-wrap">
                <div className="flex flex-col">
                  <span>{product.name}</span>
                  <span className="text-text-secondary text-xs">
                    {product.sku}
                  </span>
                  <span className="text-text-secondary text-xs">
                    {product.id.slice(0, 5)}
                  </span>
                </div>
              </td>

              <td className="px-4 py-2 whitespace-nowrap">
                {product.selling_price}
              </td>

              <td className="px-4 py-2 whitespace-nowrap">
                <div className="flex items-center gap-3 rounded-lg">
                  {/* Decrease Button */}
                  <button
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                    className="bg-background hover:bg-surface rounded px-3 py-1 text-lg font-bold transition hover:cursor-pointer"
                  >
                    −
                  </button>

                  {/* Current Count */}
                  <span className="min-w-[30px] text-center font-medium">
                    {product.quantityCount ?? 0}
                  </span>

                  {/* Increase Button */}
                  <button
                    onClick={() => dispatch(increaseQuantity(product.id))}
                    className="bg-background hover:bg-surface rounded px-3 py-1 text-lg font-bold transition hover:cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="px-4 py-2 font-semibold whitespace-nowrap">
                ₹ {product.total ?? 0}
              </td>
            </tr>
          </>
        );
      })}
    </List>
  );
}
