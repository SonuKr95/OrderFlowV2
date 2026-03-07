import List from "../../../components/ui/List";
// import { useProductsWithInventory } from "../hooks/useProductsWithInventory";
import { recentlyDeletedColumns } from "../constants/recentlyDeletedColumns";
import { useRecentlyDeleted } from "../hooks/useRecentlyDeleted";
import { refresh, deleteicon } from "../../../icons/_index";
import { useRestoreProduct } from "../hooks/useRestoreProduct";
import toast from "react-hot-toast";
import { queryClient } from "../../../app/queryClient";
import { useSelector } from "react-redux";
// import { getStockStatus } from "../constants/stockStatus";
import { formatDateTime } from "../../../utils/dateFormat";
// import { useDeleteProductById } from "../hooks/useDeleteProductById";
// import toast from "react-hot-toast";
// import { useState } from "react";
// import { queryClient } from "../../../app/queryClient";
// import { editicon, deleteicon } from "../../../icons/_index";
// import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
// import useEditModal from "../../../app/context/hook/_useEditModal";
// import EditModal from "../../../components/ui/EditModal";
// import EditContainer from "../../../components/ui/EditContainer";
// import { useList } from "../../../app/context/hook/_useList";

function RecentlyDeleted() {
  const { data: RecentlyDeletedProducts = [] } = useRecentlyDeleted();
  const restoreProductMutation = useRestoreProduct();
  const { userRole } = useSelector((state) => state.auth);
  const isViewer = userRole === "viewer";

  const handleRestoreProduct = (id) =>
    restoreProductMutation.mutate(id, {
      onSuccess: (product) => {
        toast.success(`Successfully Restored ${product.name}`);
        queryClient.invalidateQueries({
          queryKey: ["recently-deleted-product"],
        });

        queryClient.invalidateQueries({
          queryKey: ["products-with-inventory"],
        });
      },
    });
  console.log(RecentlyDeletedProducts);
  // const deleteProductMutation = useDeleteProductById();
  // const [deleteTarget, setDeleteTarget] = useState(null);

  // const deleteProduct = (id) =>
  //   deleteProductMutation.mutate(id, {
  //     onSuccess: (product) => {
  //       toast.success(`Deleted ${product.name}`);
  //       queryClient.invalidateQueries({
  //         queryKey: ["products-with-inventory"],
  //       });
  //     },
  //   });

  // const openDeleteModal = (product) => {
  //   setDeleteTarget(product);
  // };

  // const closeDeleteModal = () => {
  //   setDeleteTarget(null);
  // };

  // const confirmDelete = () => {
  //   if (!deleteTarget) return;
  //   deleteProduct(deleteTarget.id);
  //   closeDeleteModal();
  // };

  return (
    <div className="grid-row-2 relative grid gap-15 bg-[#D1D5DB] px-5 py-4">
      {/* {editBtnClicked && <EditProductModal product={selectedProduct} />} */}
      <p>Recently Deleted Product</p>
      <div className="flex flex-wrap justify-between gap-5">
        {/* <CategoryCards /> */}
      </div>
      {/* <ConfirmDeleteModal
        isOpen={!!deleteTarget}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        title="Delete Product"
        message={`Are you sure you want to delete ${deleteTarget?.name}?`}
        isLoading={deleteProductMutation.isPending}
      /> */}

      <List columns={recentlyDeletedColumns} colStart={1} rowStart={3}>
        {RecentlyDeletedProducts?.map((product) => {
          // const stock = getStockStatus(product.quantity);
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
                {formatDateTime(product.deleted_at) ?? null}
              </td>
              {/* <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.mrp ?? null}
              </td> */}
              {/* <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                <span className={stock.className}>{stock.label}</span>
              </td> */}
              {/* <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.status ?? null}
              </td> */}
              {/* <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {formatDateTime(product.updated_at) ?? null}
              </td> */}
              <td>
                <div className="right flex flex-wrap items-center justify-around">
                  <button
                    disabled={isViewer}
                    title="Restore Product"
                    className="hover:cursor-pointer disabled:cursor-not-allowed"
                    onClick={() => {
                      handleRestoreProduct(product.id);
                    }}
                  >
                    <img src={refresh} alt="restoreproducticon" />
                  </button>
                  {/* <button>
                    <img src={deleteicon} alt="deleteicon" />
                  </button> */}
                </div>
              </td>
            </tr>
          );
        })}
      </List>
    </div>
  );
}

export default RecentlyDeleted;
