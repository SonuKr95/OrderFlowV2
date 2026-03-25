import { useSelector } from "react-redux";
export default function ArchiveProductModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  isLoading,
  isViewer,
}) {
  const { userRole } = useSelector((state) => state.auth);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* Modal Card */}
      <div className="border-border bg-surface w-full max-w-md rounded-2xl border p-6 shadow-xl">
        {/* Title */}
        <h2 className="text-text-primary text-lg font-semibold">{title}</h2>

        {/* Message */}
        <p className="text-text-secondary mt-2 text-sm">{message}</p>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          {/* Cancel */}
          <button
            onClick={onClose}
            className="border-border text-text-secondary rounded-lg border px-4 py-2 text-sm transition hover:cursor-pointer hover:bg-[#2a3447] disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isLoading}
          >
            Cancel
          </button>

          {/* Archive */}
          <button
            onClick={onConfirm}
            className={`$ rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:cursor-pointer hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400`}
            disabled={isLoading || isViewer}
          >
            {isLoading ? "Archiving..." : "Archive"}
          </button>
        </div>
      </div>
    </div>
  );
}
