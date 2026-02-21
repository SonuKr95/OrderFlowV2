import { useProductsWithInventory } from "../../../products/hooks/useProductsWithInventory";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../app/store/slices/cartSlice";
import { useState } from "react";
useState;

export function SelectProduct() {
  const { data: products = [] } = useProductsWithInventory();
  const [selectedProduct, setSelectedProduct] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const productId = e.target.value;
    const selectedProduct = products.find((p) => p.id === productId);
    if (selectedProduct) {
      dispatch(addProduct(selectedProduct)); // Dispatch the whole object
    }
  };
  // console.log(products);
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
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
    </div>
  );
}
