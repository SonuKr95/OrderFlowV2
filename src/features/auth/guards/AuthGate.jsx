import { useRestoreAuth } from "../session/useRestoreAuth";
import { Outlet } from "react-router-dom";
import AuthLoadingModal from "../components/AuthLoadingModal";

function AuthGate() {
  const { isPending } = useRestoreAuth();
  if (isPending) {
    return <AuthLoadingModal />;
  }
  return <Outlet />;
}

export default AuthGate;
