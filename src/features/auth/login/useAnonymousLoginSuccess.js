import { LOGIN_ROUTES } from "../constants/loginRoutes";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../../app/store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AUTH_STATUS } from "../constants/authStatus";
import { getUserRole } from "./getUserRole";

export function useAnonymousLoginSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async function handleAnonymousLoginSuccess() {
    const userRole = await getUserRole();

    const data = {
      userRole: userRole,
      authStatus: AUTH_STATUS.AUTHENTICATED,
    };

    console.log(data);

    dispatch(setAuthUser(data));
    toast.success("Welcome Viewer");
    navigate(LOGIN_ROUTES.ANONYMOUS_DASHBOARD, { replace: true });
  };
}
