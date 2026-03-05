import supabase from "../../../services/supabase";

export async function anonymousSignin() {
  const { data, error } = await supabase.auth.signInAnonymously();
  if (error) throw error;
  console.log(data);
  return data;
}
