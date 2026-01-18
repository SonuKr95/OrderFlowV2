import supabase from "./supabase";

export async function productCategories() {
  let { data: categories, error } = await supabase
    .from("categories")
    .select("name, id");

  return categories;
}
