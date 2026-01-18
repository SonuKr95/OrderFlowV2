// import { loginUser } from "./loginUser";
import supabase from "../../../services/supabase";
import { fetchUserRole } from "./fetchLoggedUserRole";

export async function loginWithRole({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message || "Login failed");
  }
  const loggerUserRole = await fetchUserRole(data.user.id);

  return {
    user: data.user,
    loggerUserRole,
  };
}
