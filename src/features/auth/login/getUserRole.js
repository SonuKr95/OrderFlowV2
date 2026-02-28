import supabase from "../../../services/supabase";
import { AUTH_ERRORS } from "../constants/authErrors";

export async function getUserRole() {
  const { data, error } = await supabase.auth.getClaims();
  if (error) throw error;
  const user_role = data?.claims?.user_role;
  console.log(user_role);
  if (!user_role) throw new Error(AUTH_ERRORS.USER_MISSING);

  return user_role;
}
