import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../app/store/slices/authSlice";
import { queryClient } from "..//..//..//app/queryClient";

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("auth");
    queryClient.clear();
    // or invalidate auth-related queries
    navigate("/login", { replace: true });
  };
}
