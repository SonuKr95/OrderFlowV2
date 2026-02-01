import CategoryCards from "../..//..//components/cards/CategoryCards";
import List from "../../../components/ui/List";
import { useProductsWithInventory } from "../hooks/useProductsWithInventory";
import { productColumns } from "../constants/productColumns";
import { getStockStatus } from "../constants/stockStatus";
import { formatDateTime } from "../../../utils/dateFormat";
import { useSoftDeleteProduct } from "../hooks/useSoftDeleteProduct";
import toast from "react-hot-toast";
import { useState } from "react";
import { queryClient } from "../../../app/queryClient";
import { editicon, deleteicon } from "../../../icons/_index";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import EditProductModal from "../components/EditProductModal";

function ProductList() {
  const { data: productList = [] } = useProductsWithInventory();
  const [editTarget, setEditTarget] = useState(null);
  const openEditModal = (product) => {
    // console.log(e);
    setEditTarget(product);
  };

  const closeEditModal = () => {
    setEditTarget(null);
  };

  const softDeleteProductMutation = useSoftDeleteProduct();
  const [deleteTarget, setDeleteTarget] = useState(null);

  const softDeleteProduct = (id) =>
    softDeleteProductMutation.mutate(id, {
      onSuccess: (product) => {
        toast.success(`Deleted ${product.name}`);
        queryClient.invalidateQueries({
          queryKey: ["products-with-inventory"],
        });
      },
    });

  const openDeleteModal = (product) => {
    setDeleteTarget(product);
  };

  const closeDeleteModal = () => {
    setDeleteTarget(null);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    softDeleteProduct(deleteTarget.id);
    closeDeleteModal();
  };

  return (
    <div className="grid-row-2 relative grid gap-15 bg-[#D1D5DB] px-5 py-4">
      <p>Add Product</p>
      <div className="flex flex-wrap justify-between gap-5">
        <CategoryCards />
      </div>
      <EditProductModal
        isOpen={!!editTarget}
        product={editTarget}
        onClose={closeEditModal}
      />

      <ConfirmDeleteModal
        isOpen={!!deleteTarget}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        title="Delete Product"
        message={`Are you sure you want to delete ${deleteTarget?.name}?`}
        isLoading={softDeleteProduct.isPending}
      />

      <List columns={productColumns} colStart={1} rowStart={3}>
        {productList?.map((product) => {
          const stock = getStockStatus(product.quantity);
          return (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-700">
                {product.sku ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.name ?? "null"}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.category ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.selling_price ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.mrp ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                <span className={stock.className}>{stock.label}</span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.status ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {formatDateTime(product.updated_at) ?? null}
              </td>
              <td>
                <div className="right flex flex-wrap items-center justify-around">
                  <button onClick={() => openEditModal(product)}>
                    <img src={editicon} alt="editicon" />
                  </button>
                  <button onClick={() => openDeleteModal(product)}>
                    <img src={deleteicon} alt="deleteicon" />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </List>
    </div>
  );
}

export default ProductList;
