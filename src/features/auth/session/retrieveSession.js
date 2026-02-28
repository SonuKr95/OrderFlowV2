import supabase from "../../../services/supabase";
import { getUserRole } from "../login/getUserRole";

export async function retrieveSession() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw error;
  let userRole = null;

  try {
    userRole = await getUserRole();
  } catch (err) {
    console.error("Role fetch failed", err);
  }

  return {
    user,
    userRole,
  };
}
