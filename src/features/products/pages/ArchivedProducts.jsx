import List from "../../../components/ui/List";

import { ArchiveProductTableColumns } from "../constants/ArchiveProductTableColumns";
import { useFetchArchiveProductList } from "../hooks/useFetchArchiveProductList";
import { refresh } from "../../../icons/_index";
import { useRestoreArchieveProductById } from "../hooks/useRestoreArchieveProductById";
import toast from "react-hot-toast";
import { queryClient } from "../../../app/queryClient";
import { useSelector } from "react-redux";

import { formatDateTime } from "../../../utils/dateFormat";

function ArchivedProducts() {
  const { data: archiveProducts = [] } = useFetchArchiveProductList();
  const restoreProductMutation = useRestoreArchieveProductById();
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

  return (
    <div className="grid-row-2 relative grid">
      <div className="flex flex-wrap justify-between gap-5"></div>

      <List columns={ArchiveProductTableColumns} colStart={1} rowStart={3}>
        {archiveProducts?.map((product) => {
          return (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-700">
                {product.sku ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.name ?? "null"}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.category_name ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {formatDateTime(product.deleted_at) ?? null}
              </td>

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
                </div>
              </td>
            </tr>
          );
        })}
      </List>
    </div>
  );
}

export default ArchivedProducts;
