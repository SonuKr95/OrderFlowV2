import { useSelector } from "react-redux";
export default function ArchiveProductModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  isLoading,
}) {
  const { userRole } = useSelector((state) => state.auth);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-3 text-lg font-semibold text-gray-800">{title}</h2>

        <p className="mb-6 text-sm text-gray-600">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-sm"
            disabled={isLoading}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className={`rounded-lg bg-red-600 px-4 py-2 text-sm text-white ${userRole === "viewer" ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70" : ""}`}
            disabled={isLoading || userRole === "viewer"}
          >
            {isLoading ? "Archiveing..." : "Archive"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ${isFormDisabled ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70" : ""}`}
