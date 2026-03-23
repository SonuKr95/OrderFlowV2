function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="border-border h-10 w-10 animate-spin rounded-full border-4 border-t-violet-500" />
        <p className="text-text-secondary text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default PageLoader;
