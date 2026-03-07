import supabase from "../../../services/supabase";

export async function createOrderNew(items) {
  const { data, error } = await supabase.rpc("update_inventory", {
    items,
  });
  if (error) throw error;
  console.log(error);
  return data;
}
