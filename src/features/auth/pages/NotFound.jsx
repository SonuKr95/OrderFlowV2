import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NotFound() {
  const status = useSelector((state) => state.auth.status);
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="bg-surface text-text-primary w-full max-w-md space-y-8 rounded-xl p-10 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-tight">
          404 - Page not found
        </h1>

        <p className="text-lg">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-surface border-border hover:bg-background flex items-center justify-center rounded-md border px-5 py-3 text-base font-medium shadow-sm transition-colors hover:cursor-pointer focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Go home
          </Link>

          {!status ? (
            <Link
              to="/login"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-md transition-colors hover:cursor-pointer hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            >
              Login
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NotFound;
