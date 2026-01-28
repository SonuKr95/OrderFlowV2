import supabase from "../../services/supabase";
// export async function createProduct({
//   name,
//   description,
//   sku,
//   mrp,
//   selling_price,
//   tax_rate,
//   category_id,
//   status,
// }) {

export async function createProduct(payload) {
  const { quantity, ...productInsertData } = payload;
  const { data, error } = await supabase
    .from("products")
    .insert([productInsertData])
    .select()
    .single();

  if (error) throw error;

  return data;
}

//modification
export async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return data;
}

export async function fetchProductCategories() {
  const { data, error } = await supabase.from("categories").select("name, id");
  if (error) throw error;
  return data;
}

//modification
export async function updateProductById(payload) {
  const { id, ...newUpdatedData } = payload;
  const { data, error } = await supabase
    .from("products")
    .update(newUpdatedData)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteProductById(id) {
  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
