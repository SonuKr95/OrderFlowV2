import supabase from "../../../services/supabase";
import { fetchUserRole } from "./fetchUserRole";
import { AUTH_ERRORS } from "../constants/authErrors";

export async function loginWithRole({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(data);

    if (error) {
      throw new Error(AUTH_ERRORS.LOGIN_FAILED);
    }

    if (!data?.user) {
      throw new Error(AUTH_ERRORS.USER_MISSING);
    }
    const role = await fetchUserRole(data.user.id);

    return {
      id: data.user.id,
      email: data.user.email,
      status: data.user.aud,
      role,
    };
  } catch (err) {
    throw new Error(`loginWithRole failed: ${err.message}`);
  }
}
