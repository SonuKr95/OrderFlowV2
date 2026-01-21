import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectPaymentMethod } from "../../../../store/slices/cartSlice";

export function PaymentMethod() {
  const [selectedPaymentMethod, setselectedPaymentMethod] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    // console.log(e.target.value);
    const newValue = e.target.value;
    setselectedPaymentMethod(newValue);
    if (newValue) {
      dispatch(selectPaymentMethod(newValue));
    }
    // dispatch(selectedPaymentMethod);
  }

  // handleChange()=>dispatch(selectedPaymentMethod)

  return (
    <div className="mt-5">
      <select
        name=""
        id=""
        value={selectedPaymentMethod}
        onChange={handleChange}
        className="w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none disabled:text-gray-400"
      >
        <option value="" disabled>
          Select a payment methid
        </option>
        <option value="cod">Cash on delivery</option>
        <option value="prepaid">Prepaid</option>
      </select>
    </div>
  );
}

{
  /* <select
  name=""
  id=""
  value={selectedProduct}
  onChange={handleChange}
  className="w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none disabled:text-gray-400"
>
  <option value="" disabled>
    Select Product
  </option>
  {products?.map((product) => (
    <option value={product.product_id}>{product.name}</option>
  ))}
</select>; */
}
