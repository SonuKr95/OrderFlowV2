import supabase from "../../services/supabase";

export async function createInventory(productId, productQuantity) {
  const sanitizedQuantity = Number(productQuantity) || 0;
  console.log(productId);
  console.log(productQuantity);

  console.log(`createInventory ${productId}`);
  const { error } = await supabase
    .from("inventory")
    .insert([
      {
        product_id: productId,
        quantity: sanitizedQuantity,
        low_stock_threshold: 5,
      },
    ])
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
