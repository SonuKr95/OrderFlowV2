import { useProductList } from "../../../products/hooks/useProductList";
import { useDispatch } from "react-redux";
import { setProduct } from "../../../../store/slices/cartSlice";

export function SelectProduct() {
  const products = useProductList();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const selectedProduct = e.target.value;
    dispatch(setProduct(selectedProduct));
  };
  console.log(products);
  return (
    <div className="col-start-2 row-start-1">
      <p>Select Product</p>

      {/* <p>quantity</p> */}
      <select name="" id="" onChange={handleChange}>
        <option disabled>Select Products</option>
        {products?.map((product) => (
          <option value={product}>{product.name}</option>
        ))}
      </select>
    </div>
  );
}
