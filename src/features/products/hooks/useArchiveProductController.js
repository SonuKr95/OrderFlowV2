import toast from "react-hot-toast";
import { useState } from "react";
import { queryClient } from "../../../app/queryClient";
import { useArchiveProductById } from "./useArchiveProductById";

export function useArchiveProductController() {
  const [archiveTarget, setarchiveTarget] = useState(null);
  const mutation = useArchiveProductById();
  const openArchiveModal = (product) => {
    setarchiveTarget(product);
  };
  const closeArchiveModal = () => {
    setarchiveTarget(null);
  };
  const confirmArchive = () => {
    if (!archiveTarget) return;
    mutation.mutate(archiveTarget.id, {
      onSuccess: () => {
        toast.success(
          `Successfully archived Product ${archiveTarget.name} with SKU: ${archiveTarget.sku}`,
        );
        queryClient.invalidateQueries({
          queryKey: ["products-with-inventory"],
        });
        closeArchiveModal();
      },
    });
  };
  return {
    archiveTarget,
    openArchiveModal,
    closeArchiveModal,
    confirmArchive,
    isArchiveing: mutation.isPending,
  };
}
