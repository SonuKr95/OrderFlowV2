//
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="bg-surface text-text-primary w-full max-w-md space-y-8 rounded-xl p-10 text-center shadow-lg">
        {/* Text Content */}
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">
            403 - Access Denied
          </h1>
          <p className="text-lg">
            Oops! You don't have the permissions required to view this page.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <button
            onClick={() => navigate(-1)}
            className="bg-surface border-border hover:bg-background flex items-center justify-center rounded-md border px-5 py-3 text-base font-medium shadow-sm transition-colors hover:cursor-pointer focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            {/* <ArrowLeft className="mr-2 h-5 w-5" /> */}
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-md transition-colors hover:cursor-pointer hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          >
            Login as Admin
          </button>
        </div>

        {/* Support Link */}
        <p className="mt-8 text-sm text-gray-400">
          If you believe this is an error, please contact your system
          administrator.
        </p>
      </div>
    </div>
  );
}

export default Unauthorized;
