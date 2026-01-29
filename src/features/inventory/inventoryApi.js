import supabase from "../../services/supabase";
import { CREATE_INVENTORY_DEFAULT } from "./constants/createInventoryDefault";

export async function createInventory({ id, quantity, sku, status }) {
  const inventoryRecord = {
    id,
    sku,
    quantity: Number(quantity) || 0,
    lowstock_threshold: CREATE_INVENTORY_DEFAULT.DEFAULT_LOW_STOCK_THRESHOLD,
    updated_by: CREATE_INVENTORY_DEFAULT.SYSTEM_USER,
    status,
  };

  const { data, error } = await supabase
    .from("inventory")
    .insert([inventoryRecord])
    .select()
    .single();
  if (error) throw error;
  return data;
}

// export async function getInventory() {
//   const { data, error } = await supabase.from("inventory").select(`
//     quantity,
//     updated_at,
//     product_id,
//     products (
//       name,
//       sku
//     )
//   `);

//   return data;
// }
export async function fetchProductInventoryQuantities() {
  const { data, error } = await supabase
    .from("inventory")
    .select("quantity,id");
  if (error) throw error;

  return data;
}

export async function updateInventory(payload) {
  console.log(payload);
  const { product_id, ...newUpdatedData } = payload;
  console.log(product_id);
  console.log(newUpdatedData);

  const { data, error } = await supabase
    .from("inventory")
    .update(newUpdatedData)
    .eq("product_id", product_id)
    .select();
  console.log(data);

  console.log(data);
  if (error) throw new Error(error.message);
  return data;
}
