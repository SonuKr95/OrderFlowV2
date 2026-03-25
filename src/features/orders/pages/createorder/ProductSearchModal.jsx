import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../app/store/slices/cartSlice";
import { useDebounce } from "../../../../hooks/useDebounce.js";
import { useSearchProducts } from "../../../products/hooks/useSearchProducts";
import { useUserRole } from "../../../../app/context/hook/useUserRole.jsx";

export default function ProductSearchModal({ productModal, setProductModal }) {
  const { userRole } = useUserRole();
  const isViewer = userRole === "viewer";
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const debouncedSearch = useDebounce(search, 400);
  const { data: products = [], isLoading } = useSearchProducts(debouncedSearch);

  function selectProduct(p) {
    dispatch(addProduct(p));
    // setSearch("");
    setSelectedProductId(""); // reset after add
  }
  if (!productModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-surface flex max-h-[85vh] w-[700px] flex-col rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-text-primary text-lg font-semibold">
            Add Product
          </h2>
          <button
            onClick={() => setProductModal(false)}
            className="hover:bg-border rounded-md p-1 text-gray-500 hover:cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-text-primary w-full rounded-lg border px-3 py-2 text-base outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-500"
            disabled={isViewer}
          />

          <ul className="mt-3 max-h-72 divide-y overflow-y-auto rounded-lg border">
            {products.length === 0 && (
              <li className="text-text-primary p-4 text-center text-base">
                No products found
              </li>
            )}

            {products.map((p) => (
              <li
                key={p.id}
                onClick={() => selectProduct(p)}
                className="text-text-primary hover:bg-border cursor-pointer px-4 py-3 transition"
              >
                <p className="text-sm font-medium">{p.name}</p>
                <p className="text-text-secondary text-xs">SKU : {p.sku}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
