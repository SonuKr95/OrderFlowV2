import supabase from "../../services/supabase";

export async function fecthCustomers() {
  const { data, error } = await supabase
    .from("customers")
    .select("name,phone_number,address,id,created_at");
  if (error) throw error;
  return data;
}

export async function createCustomer(payload) {
  const { data, error } = await supabase.rpc("create_customer", {
    payload: payload,
  });
  if (error) throw error;
  return data;
}
