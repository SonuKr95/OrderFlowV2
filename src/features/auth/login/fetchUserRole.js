import supabase from "../../../services/supabase";
import { AUTH_ERRORS } from "../constants/authErrors";
export async function fetchUserRole(user_id) {
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user_id)
    .single();
  if (error || !data?.role) {
    throw new Error(AUTH_ERRORS.ROLE_NOT_FOUND);
  }

  return data.role;
}
