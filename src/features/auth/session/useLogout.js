import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../app/store/slices/authSlice";
import { queryClient } from "../../../app/queryClient";

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return function handleLogout() {
    localStorage.removeItem("auth");
    dispatch(logout());
    queryClient.removeQueries({ queryKey: ["auth"] });
    queryClient.invalidateQueries();
    navigate("/login", { replace: true });
  };
}
