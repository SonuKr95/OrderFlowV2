export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="border-border bg-surface w-full max-w-md rounded-2xl border p-6 shadow-xl">
        {/* Message */}
        <p className="text-text-secondary mt-2 text-sm">
          Are you sure want to logout?
        </p>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          {/* Cancel */}
          <button
            onClick={onClose}
            className="border-border text-text-secondary rounded-lg border px-4 py-2 text-sm transition hover:bg-[#2a3447] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          {/* Archive */}
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`$ rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700`}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
