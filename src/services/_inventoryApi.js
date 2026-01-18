import supabase from "./supabase";

export async function createInventory(productId, quantity = 0) {
  console.log(`createInventory ${productId}`);
  const { error } = await supabase
    .from("inventory")
    .insert([{ product_id: productId, quantity, low_stock_threshold: 5 }])
    .select();

  if (error) throw new Error(error.message);
}

export async function getInventory() {
  const { data, error } = await supabase.from("inventory").select(`
    quantity,
    updated_at,
    product_id,
    products (
      name,
      sku
    )
  `);

  return data;
}

export async function updateInventory(productId, payload) {
  console.log(productId);
  console.log(payload);

  const { data, error } = await supabase
    .from("inventory")
    .update(payload)
    .eq("product_id", productId)
    .select();
  console.log(data);

  console.log(data);
  if (error) throw new Error(error.message);
  return data;
}
