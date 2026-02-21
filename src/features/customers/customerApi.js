import supabase from "../../services/supabase";

export async function getCustomers() {
  const { data, error } = await supabase
    .from("customers")
    .select("name,phone_number,id,address");
  if (error) throw error;
  return data;
}
export async function createCustomer(payload) {
  // console.log(payload);
  const { data, error } = await supabase
    .from("customers")
    .insert([payload])
    .select()
    .single();

  if (error) throw error;
  // console.log(data);
  return data;
}
