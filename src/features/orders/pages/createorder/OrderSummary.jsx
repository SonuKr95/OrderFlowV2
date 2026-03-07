// import { useSelector } from "react-redux";
// import { selectCartTotal } from "../../../../store/slices/cartSlice";
// import { selectCartTotal } from "./_selectcarttotal";

import { useSelector } from "react-redux";
import {
  selectCartProducts,
  selectSubtotal,
  // selectTax,
  // selectTotalPayable,
} from "../../../../app/store/selectors/cartSelectors";

// 2. Calculate the Grand Total
// export const selectCartTotal = createSelector([selectCartItems], (items) =>
//   items.reduce((acc, item) => acc + item.price * item.count, 0),
// );

export function OrderSummary() {
  // const shipping = useSelector((state) => state.cart.shipping);
  const subTotal = useSelector(selectSubtotal);
  // const tax = useSelector(selectTax);
  // const totalPayable = useSelector(selectTotalPayable);
  const products = useSelector(selectCartProducts);
  // console.log(total);
  // 1. Get the raw quantity array from state
  // const selectCartTotal = createSelector([selectCartItems], (items) =>
  //   items.reduce((acc, item) => acc + item.price * item.count, 0),
  // );
  // console.log(selectCartTotal);
  // const summary = useSelector((state) => state.cart.summary);
  // console.log(summary);
  return (
    <>
      <div className="flex gap-5">
        <span>Subtotal</span>
        <span>{products.length === 0 ? null : subTotal.toFixed(2)}</span>
      </div>
      <div className="flex gap-5">
        <span>Tax</span>
        {/* <span>{products.length === 0 ? null : tax.toFixed(2)}</span> */}
      </div>
      <div className="flex gap-5">
        <span>Shipping</span>
        {/* <span>{products.length === 0 ? null : shipping.toFixed(2)}</span> */}
      </div>
      <div className="flex gap-5">
        <span> Total Payable</span>
        {/* <span>{products.length === 0 ? null : totalPayable.toFixed(2)}</span> */}
      </div>
    </>
  );
}
