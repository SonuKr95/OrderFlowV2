import supabase from "../../../services/supabase";

export async function anonymousUserLogin() {
  const { data, error } = await supabase.auth.signInAnonymously();
  if (error) throw error;
  return data;
}
