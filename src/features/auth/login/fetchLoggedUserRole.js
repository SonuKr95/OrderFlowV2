import supabase from "../../../services/supabase";
export async function fetchUserRole(user_id) {
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user_id)
    .single();
  if (error) throw error;

  return data.role;
}
