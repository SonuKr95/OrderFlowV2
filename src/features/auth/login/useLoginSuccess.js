import { ROLES } from "../constants/roles";
import { LOGIN_ROUTES } from "../constants/loginRoutes";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../../app/store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLoginSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return function handleLoginSuccess({ email, id, role, status }) {
    dispatch(
      setAuthUser({
        id,
        email,
        role,
        // status,
      }),
    );
    toast.success("Logged In");

    localStorage.setItem(
      "auth",
      JSON.stringify({
        email,
        role,
        id,
        status,
      }),
    );
    if (role === ROLES.ADMIN) {
      navigate(LOGIN_ROUTES.ADMIN_DASHBOARD, { replace: true });
    } else if (role === ROLES.STAFF) {
      navigate(LOGIN_ROUTES.STAFF_PRODUCTLIST, { replace: true });
    }
  };
}
