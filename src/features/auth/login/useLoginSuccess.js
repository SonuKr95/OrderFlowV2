import { ROLES } from "../constants/roles";
import { LOGIN_ROUTES } from "../constants/loginRoutes";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../../app/store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AUTH_STATUS } from "../constants/authStatus";
import { getUserRole } from "./getUserRole";

export function useLoginSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async function handleLoginSuccess() {
    const userRole = await getUserRole();

    const data = {
      userRole: userRole,
      authStatus: AUTH_STATUS.AUTHENTICATED,
    };

    dispatch(setAuthUser(data));
    toast.success("Logged In");

    if (userRole === ROLES.ADMIN) {
      navigate(LOGIN_ROUTES.ADMIN_DASHBOARD, { replace: true });
    }
    if (userRole === ROLES.STAFF) {
      navigate(LOGIN_ROUTES.STAFF_PRODUCTLIST, { replace: true });
    }
  };
}
