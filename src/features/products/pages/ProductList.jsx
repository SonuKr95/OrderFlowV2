import { useFetchActiveProductList } from "../hooks/useFetchActiveProductList";
import ProductTable from "../components/ProductList/ProductTable";

function ProductList() {
  const { data: products = [] } = useFetchActiveProductList();
  return (
    <div className="grid-row-2 relative grid">
      <ProductTable products={products} />
    </div>
  );
}

export default ProductList;
