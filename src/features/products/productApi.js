import supabase from "../../services/supabase";

//creating the product
export async function createProductWithInventory(payload) {
  const { data, error } = await supabase.rpc(
    "create_product_with_inventory",
    payload,
  );
  if (error) throw error;
  return data;
}

//updating the product
export async function updateProductById(payload) {
  const { data, error } = await supabase.rpc("update_product", {
    payload: payload,
  });
  if (error) throw error;
  return data;
}

//archive the product
export async function archiveProductById(id) {
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

//fetching active product list
export async function fetchActiveProductList() {
  const { data, error } = await supabase.rpc("fetch_product_list");
  if (error) throw error;
  return data;
}

//fetching archieve product list
export async function fetchArchiveProductList() {
  const { data, error } = await supabase.rpc("fetch_archive_product_list");
  if (error) throw error;
  return data;
}

//restore archieve product
export async function restoreArchieveProductById(id) {
  const { data, error } = await supabase
    .from("products")
    .update({ deleted_at: null })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

//fetching product categories
export async function fetchProductCategories() {
  const { data, error } = await supabase.from("categories").select("name, id");
  if (error) throw error;
  return data;
}

export async function searchProducts(search_term) {
  const { data, error } = await supabase.rpc("search_products", {
    search_term,
  });
  if (error) throw error;
  return data;
}
