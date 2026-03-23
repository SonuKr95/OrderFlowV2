import { useSelector } from "react-redux";
import LogoutModal from "../../features/auth/components/LogoutModal";
import { useLogout } from "../../features/auth/session/useLogout";
import { useState } from "react";

function Navbar() {
  const { userRole } = useSelector((state) => state.auth);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const logout = useLogout();

  return (
    <header className="border-border bg-background col-start-2 row-start-1 flex items-center justify-between border-b px-6">
      <p className="text-text-primary text-xl font-semibold">Dashboard</p>

      <div className="flex items-center gap-4">
        <span className="text-text-secondary text-sm">
          {userRole?.toUpperCase()}
        </span>

        <button
          onClick={() => setShowLogoutModal(true)}
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
        >
          Logout
        </button>
      </div>
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={logout}
      />
    </header>
  );
}

export default Navbar;
