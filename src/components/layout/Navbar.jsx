import { useLogout } from "../../features/auth/session/useLogout";
import { useSelector } from "react-redux";

function Navbar() {
  const { userRole } = useSelector((state) => state.auth);

  const logout = useLogout();

  return (
    <header className="border-border bg-background col-start-2 row-start-1 flex items-center justify-between border-b px-6">
      <p className="text-text-primary text-xl font-semibold">Dashboard</p>

      <div className="flex items-center gap-4">
        <span className="text-text-secondary text-sm">
          {userRole?.toUpperCase()}
        </span>

        <button
          onClick={() => {
            if (confirm("Are you sure you want to logout?")) logout();
          }}
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;
