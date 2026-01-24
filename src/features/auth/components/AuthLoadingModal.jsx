function AuthLoadingModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 rounded-xl bg-white px-8 py-6 shadow-xl">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
        <p className="text-sm font-medium text-gray-700">Restoring session…</p>
      </div>
    </div>
  );
}

export default AuthLoadingModal;
