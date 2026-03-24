import { useFetchActiveProductList } from "../hooks/useFetchActiveProductList";
import ProductTable from "../components/ProductList/ProductTable";

function ProductList() {
  const { data: products = [] } = useFetchActiveProductList();
  return (
    <div className="">
      <ProductTable products={products} />
    </div>
  );
}

export default ProductList;
