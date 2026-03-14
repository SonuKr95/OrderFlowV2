import supabase from "../../services/supabase";

export async function fetchActiveInventory() {
  const { data, error } = await supabase.rpc("fetch_active_inventory");
  if (error) throw error;
  return data;
}

// export async function fetchInventoryForProductsList() {
//   const { data, error } = await supabase
//     .from("inventory")
//     .select("quantity,id");
//   if (error) throw error;

//   return data;
// }

///Implement Later,Need Operation on Server
export async function updateInventoryById(payload) {
  const { id, ...newUpdatedData } = payload;
  const { data, error } = await supabase
    .from("inventory")
    .update(newUpdatedData)
    .eq("id", id)
    .select()
    .single();
  if (error) throw Error;
  return data;
}

export async function fetchInventoryById(id) {
  const { data, error } = await supabase
    .from("inventory")
    .select("quantity")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function adjustStock({ id, adjusted_quantity, adjustment_type }) {
  const qty = Number(adjusted_quantity);

  if (qty <= 0) {
    throw new Error("Adjustment quantity must be positive");
  }

  const { quantity: currentQuantity } = await fetchInventoryById(id);

  let newQuantity = currentQuantity;

  if (adjustment_type === "ADD") {
    newQuantity += qty;
  }

  if (adjustment_type === "REDUCE") {
    if (qty > currentQuantity) {
      throw new Error("Insufficient stock");
    }
    newQuantity -= qty;
  }

  return updateInventoryById({ id, quantity: newQuantity });
}
