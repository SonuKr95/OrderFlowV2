export default function AuthLoadingModal() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
        {/* Card */}
        <div className="flex w-full max-w-xs flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-8 py-7 shadow-2xl backdrop-blur-xl">
          {/* Spinner */}
          <div className="relative flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-emerald-400" />

            {/* subtle inner pulse */}
            <div className="absolute h-6 w-6 animate-ping rounded-full bg-emerald-400/20" />
          </div>

          {/* Text */}
          <p className="mt-4 text-sm font-medium text-gray-300">
            Restoring your session...
          </p>

          {/* Subtext */}
          <p className="mt-1 text-xs text-gray-500">
            This will only take a moment
          </p>
        </div>
      </div>
    </div>
  );
}
