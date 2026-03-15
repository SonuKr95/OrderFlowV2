import supabase from "../../services/supabase";

export async function fetchActiveInventory() {
  const { data, error } = await supabase.rpc("fetch_active_inventory");
  if (error) throw error;
  return data;
}
export async function updateInventory(payload) {
  const { data, error } = await supabase.rpc("update_inventory", {
    payload: payload,
  });
  if (error) throw error;
  return data;
}
