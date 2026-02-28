import supabase from "../../../services/supabase";
import { AUTH_ERRORS } from "../constants/authErrors";

export async function userLogin({ email, password }) {
  if (!email || !password) {
    throw new Error(AUTH_ERRORS.MISSING_CREDENTIALS);
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return {
    user: data.user,
    session: data.session,
  };
}
