import supabase from "../../services/supabase";
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

export async function fetchProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,sku,category,selling_price,mrp,status,updated_at")
    .is("deleted_at", null);
  if (error) throw error;
  return data;
}

export async function fetchProductsForInventoryList() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,sku")
    .is("deleted_at", null);
  if (error) throw error;
  return data;
}

export async function fetchRecentlyDeleted() {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,name,sku,category,selling_price,mrp,status,updated_at,deleted_at",
    )
    .not("deleted_at", "is", null);
  if (error) throw error;
  return data;
}

//for testing only create product page will update later
export async function fetchProductList() {
  const { data, error } = await supabase.from("products").select("id,name");
  if (error) throw error;
  console.log(data);
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

export async function softDeleteProductById(id) {
  const { data, error } = await supabase
    .from("products")
    .update({
      deleted_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function restoreProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .update({ deleted_at: null })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
