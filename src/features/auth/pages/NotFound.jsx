import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NotFound() {
  const status = useSelector((state) => state.auth.status);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
          404 error
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
          Page not found
        </h1>

        <p className="mt-4 text-base text-gray-600">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Go home
          </Link>

          {!status ? (
            <Link
              to="/login"
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
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
