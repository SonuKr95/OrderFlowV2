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

export async function fetchInventory() {
  const { data, error } = await supabase
    .from("inventory")
    .select("id, quantity, updated_at, updated_by, sku");
  if (error) throw error;
  return data;
}

export async function fetchInventoryForProductsList() {
  const { data, error } = await supabase
    .from("inventory")
    .select("quantity,id");
  if (error) throw error;

  return data;
}

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
