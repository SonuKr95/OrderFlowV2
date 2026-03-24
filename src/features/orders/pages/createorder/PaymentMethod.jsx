import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaymentMethod } from "../../../../app/store/slices/cartSlice";

export default function PaymentMethod() {
  const baseClass = `
w-full rounded-lg border border-border bg-background px-3 py-2 text-sm
text-text-primary placeholder:text-text-muted
focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
disabled:opacity-50 disabled:cursor-not-allowed
transition
`;
  const [selectedPaymentMethod, setselectedPaymentMethod] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    const newValue = e.target.value;
    setselectedPaymentMethod(newValue);
    if (newValue) {
      dispatch(selectPaymentMethod(newValue));
    }
  }

  return (
    <div className="space-y-2">
      <label className="text-text-primary text-sm font-medium">
        Payment Method
      </label>

      <select
        value={selectedPaymentMethod}
        onChange={handleChange}
        className={`${baseClass} mt-1 appearance-none`}
      >
        <option value="" disabled>
          Select payment method
        </option>
        <option value="COD">Cash on delivery</option>
        <option value="PREPAID">Prepaid</option>
      </select>
    </div>
  );
}
