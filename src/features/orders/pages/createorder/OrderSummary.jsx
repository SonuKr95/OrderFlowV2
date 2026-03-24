import { useSelector } from "react-redux";
import {
  selectSubtotal,
  selectTax,
  selectItemTotal,
} from "../../../../app/store/selectors/cartSelectors";

export default function OrderSummary() {
  const subTotal = useSelector(selectSubtotal);
  const tax = useSelector(selectTax);
  const ItemTotal = useSelector(selectItemTotal);

  return (
    <div className="text-text-primary space-y-3 text-sm">
      <div className="flex justify-between">
        <span>Items</span>
        <span>{ItemTotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <span>Tax</span>
        <span>{tax.toFixed(2)}</span>
      </div>

      <div className="flex justify-between border-t pt-3 font-semibold">
        <span>Total</span>
        <span>{subTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
