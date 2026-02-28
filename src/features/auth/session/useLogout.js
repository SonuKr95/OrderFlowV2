import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../app/store/slices/authSlice";
import supabase from "../../../services/supabase";
import { queryClient } from "../../../app/queryClient";

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    dispatch(logout());
    queryClient.clear();
    navigate("/login", { replace: true });
  };
}
