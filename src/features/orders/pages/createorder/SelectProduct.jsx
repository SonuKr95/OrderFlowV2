import { useFetchProductList } from "../../../products/hooks/useFetchProductList";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../app/store/slices/cartSlice";
import { useState, useMemo, useRef } from "react";
useState;

export function SelectProduct() {
  const { data: products = [] } = useFetchProductList();

  console.log(products);
  const [selectedProduct, setSelectedProduct] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const productId = e.target.value;
    const selectedProduct = products.find((p) => p.product_id === productId);

    console.log(selectedProduct);
    if (selectedProduct) {
      dispatch(addProduct(selectedProduct)); // Dispatch the whole object
    }
  };
  console.log(products);
  return (
    <div className="col-start-2 row-start-1">
      <p>Products Selection</p>

      {/* <p>quantity</p> */}
      <select
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
      </select>
    </div>
  );
}
