// import { useSelector } from "react-redux";
// import { selectCartTotal } from "../../../../store/slices/cartSlice";
import { selectCartTotal } from "./selectcarttotal";

// 2. Calculate the Grand Total
// export const selectCartTotal = createSelector([selectCartItems], (items) =>
//   items.reduce((acc, item) => acc + item.price * item.count, 0),
// );

export function OrderSummary() {
  // 1. Get the raw quantity array from state
  // const selectCartTotal = createSelector([selectCartItems], (items) =>
  //   items.reduce((acc, item) => acc + item.price * item.count, 0),
  // );
  console.log(selectCartTotal);
  // const summary = useSelector((state) => state.cart.summary);
  // console.log(summary);
  return (
    <>
      <div>
        <span>Subtotal</span>
        <span>{selectCartTotal}</span>
      </div>
      <div>
        <span>Tax</span>
      </div>
      <div>
        <span>Shipping</span>
      </div>
      <div>
        <span> Total Payable</span>
      </div>
    </>
  );
}
