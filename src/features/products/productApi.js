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
    .select("id,name,sku,category,selling_price,mrp,status,updated_at");
  if (error) throw error;
  return data;
}

//for testing only
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
