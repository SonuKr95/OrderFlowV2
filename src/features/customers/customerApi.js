import supabase from "../../services/supabase";

export async function getCustomers() {
  let { data, error } = await supabase.from("customers").select("*");
  if (error) throw new Error(error.message);
  // console.log(data);
  return data;
}
