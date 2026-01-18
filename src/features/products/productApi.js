import supabase from "../../services/supabase";

console.log(supabase);

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

  console.log(addProductData);

  return addProductData;
}

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");
  if (error) throw new Error(error.message);
  return products;
}

export async function deleteProduct(productId) {
  console.log(productId);
  console.log(`deleting`);
  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("product_id", productId)
    .select();

  console.log(data);
  if (error) throw new Error(error.message);
  return data;
}

export async function updateProduct(payload) {
  const { product_id, ...newUpdatedData } = payload;

  console.log(product_id);
  console.log(payload);
  const { data, error } = await supabase
    .from("products")
    .update(newUpdatedData)
    .eq("product_id", product_id)
    .select();
  // console.log(data);

  console.log(data);
  if (error) throw new Error(error.message);
  return data;
}
