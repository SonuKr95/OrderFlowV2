import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../app/store/slices/cartSlice";
import { useDebounce } from "../../../../hooks/useDebounce.js";
import { useSearchProducts } from "../../../products/hooks/useSearchProducts";
// import { searchProducts } from "../../../products/productApi";

export default function ProductSearchModal({
  productModal,
  setProductModal,
  // products = [],
}) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const debouncedSearch = useDebounce(search, 400);
  const { data: products = [], isLoading } = useSearchProducts(debouncedSearch);

  function selectProduct(p) {
    // const productId = e.target.value;
    // const product = products.find((p) => p.id === productId);

    // if (!product) return;

    // const alreadyAdded = products.some((p) => p.id === product.id);

    // if (alreadyAdded) {
    //   alert("Product already added to order");
    //   setSelectedProductId("");
    //   return;
    // }

    dispatch(addProduct(p));
    setSelectedProductId(""); // reset after add
  }
  if (!productModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Modal */}
      <div className="flex max-h-[80vh] w-[700px] flex-col rounded-xl bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-lg font-semibold">Select Product</h2>

          <button
            onClick={() => {
              setProductModal(null);
            }}
            className="text-xl text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>
        {/* Search */}
        <div className="border-b p-4">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ul className="mt-2 max-h-72 overflow-y-auto rounded-lg border bg-white shadow">
            {products.length === 0 && (
              <li className="p-4 text-center text-sm text-gray-500">
                No products found
              </li>
            )}

            {products.map((p) => (
              <li
                key={p.id}
                className="cursor-pointer border-b px-4 py-3 transition-colors last:border-b-0 hover:bg-gray-100"
                onClick={() => selectProduct(p)}
              >
                <p className="text-sm font-medium text-gray-800">{p.name}</p>
                {p.sku && <p className="text-xs text-gray-500">{p.sku}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
