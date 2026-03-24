import { useRestoreAuth } from "../session/useRestoreAuth";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import AuthLoadingModal from "../components/AuthLoadingModal";
import { setAuthUser } from "../../../app/store/slices/authSlice";
import { AUTH_STATUS } from "../constants/authStatus";
import { useDispatch } from "react-redux";

function AuthGate() {
  const dispatch = useDispatch();
  const { data, isPending, isError } = useRestoreAuth();
  useEffect(() => {
    if (!isPending) {
      if (!isError || data?.user) {
        dispatch(
          setAuthUser({
            userRole: data.userRole,
            authStatus: AUTH_STATUS.AUTHENTICATED,
          }),
        );
      } else {
        dispatch(
          setAuthUser({
            userRole: null,
            authStatus: AUTH_STATUS.UNAUTHENTICATED,
          }),
        );
      }
    }
  }, [data, isPending, isError, dispatch]);

  if (isPending) {
    return <AuthLoadingModal />;
  }
  return <Outlet />;
}

export default AuthGate;
