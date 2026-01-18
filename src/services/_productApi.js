import supabase from "./supabase";

export async function addProduct({
  product_name,
  product_description,
  product_selling_price,
  product_sku,
  product_mrp,
  category_id,
  product_quantity,
}) {
  // console.log(category_id);

  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        product_id: self.crypto.randomUUID(),
        sku: product_sku,
        name: product_name,
        description: product_description,
        price: product_selling_price,
        category_id,
        mrp: product_mrp,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  const addProductData = {
    product_id: data.product_id,
    product_quantity,
  };

  return addProductData;
}
