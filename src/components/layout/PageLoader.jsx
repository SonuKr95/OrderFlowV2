function PageLoader() {
  return (
    <div className="flex h-full min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
        <p className="text-sm font-medium text-gray-600">Loading…</p>
      </div>
    </div>
  );
}

export default PageLoader;
