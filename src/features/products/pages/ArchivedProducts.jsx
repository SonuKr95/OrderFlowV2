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
  const baseclass = "px-4 py-3 text-sm text-text-primary whitespace-nowrap";
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
            <tr key={product.id} className="transition hover:bg-[#2a3447]">
              <td className={baseclass}>{product.sku ?? null}</td>
              <td className={baseclass}>{product.name ?? "null"}</td>
              <td className={baseclass}>{product.category_name ?? null}</td>
              <td className={baseclass}>
                {formatDateTime(product.deleted_at) ?? null}
              </td>

              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-2">
                  <button
                    title="Restore Product"
                    className="rounded-md p-2 transition hover:cursor-pointer hover:bg-[#2a3447]"
                    onClick={() => {
                      handleRestoreProduct(product.id);
                    }}
                  >
                    <img
                      src={refresh}
                      alt="restoreproducticon"
                      className="h-5 w-5 opacity-70 invert hover:opacity-100"
                    />
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
