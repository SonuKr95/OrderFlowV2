import { useActiveProductList } from "../hooks/useActiveProductList";
import CategoryCards from "../..//..//components/cards/CategoryCards";
import ProductListTable from "../components/ProductListTable";

function ProductList() {
  const { data: products = [] } = useActiveProductList();
  return (
    <div className="grid-row-2 relative grid gap-15 bg-[#D1D5DB] px-5 py-4">
      <p>Add Product</p>
      <div className="flex flex-wrap justify-between gap-5">
        <CategoryCards />
      </div>
      <ProductListTable products={products} />
    </div>
  );
}

export default ProductList;
