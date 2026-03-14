import { ActiveProductTableColumns } from "../../constants/ActiveProductTableColumns";
import { useState } from "react";
import UpdateProductModal from "../Modals/UpdateProductModal";
import ProductArchiveModal from "../Modals/ArchiveProductModal";
import { useArchiveProductController } from "../../hooks/useArchiveProductController";
import List from "../../../../components/ui/List";
import ActiveProductTableRow from "./ActiveProductTableRow";
function ProductTable({ products }) {
  const [updateTarget, setUpdateTarget] = useState(null);
  const {
    openArchiveModal,
    closeArchiveModal,
    confirmArchive,
    archiveTarget,
    isArchiveing,
  } = useArchiveProductController();
  return (
    <>
      <List columns={ActiveProductTableColumns} colStart={1} rowStart={3}>
        {products.map((product) => (
          <ActiveProductTableRow
            key={product.id}
            product={product}
            onEdit={setUpdateTarget}
            onArchive={openArchiveModal}
          />
        ))}
      </List>
      <UpdateProductModal
        //!! (Double Bang Operator): This is a common JavaScript shorthand used to force a "truthy" or "falsy" value into a strict boolean
        // The first !: Converts the value to the opposite boolean. If updateTarget is an object, !updateTarget becomes false.
        // The second !: Flips it back. So !!updateTarget becomes true.
        isOpen={!!updateTarget}
        product={updateTarget}
        onClose={() => setUpdateTarget(null)}
      />
      <ProductArchiveModal
        isOpen={!!archiveTarget}
        onClose={closeArchiveModal}
        onConfirm={confirmArchive}
        title="Archive Product"
        message={`Are you sure you want to Archive ${archiveTarget?.name}?`}
        isLoading={isArchiveing}
      />
    </>
  );
}

export default ProductTable;
