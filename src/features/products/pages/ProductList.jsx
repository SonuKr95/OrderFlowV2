import { useFetchActiveProductList } from "../hooks/useFetchActiveProductList";
import CategoryCards from "../..//..//components/cards/CategoryCards";
import ProductTable from "../components/ProductList/ProductTable";

function ProductList() {
  const { data: products = [] } = useFetchActiveProductList();
  return (
    <div className="grid-row-2 relative grid gap-15 bg-[#D1D5DB] px-5 py-4">
      <p>Add Product</p>
      <div className="flex flex-wrap justify-between gap-5">
        {/* <CategoryCards /> */}
      </div>
      <ProductTable products={products} />
    </div>
  );
}

export default ProductList;
