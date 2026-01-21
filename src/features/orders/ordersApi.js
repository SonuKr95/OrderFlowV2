import supabase from "../../services/supabase";

export async function getOrders() {
  const { data: orders, error } = await supabase.from("orders").select("*");
  if (error) throw new Error(error.message);
  return orders;
}
export async function getOrderItemsByOrderId(orderId) {
  const { data, error } = await supabase
    .from("order_items")
    .select("*")
    .eq("order_id", orderId);
  if (error) throw new Error(error.message);
  return data;
}

export async function createOrder(orderObj) {
  const { data, error } = await supabase
    .from("orders")
    .insert([orderObj])
    .select();
  if (error) throw new Error(error.message);
  return data;
}

export async function createOrderItem(orderObj) {
  const { data, error } = await supabase
    .from("order_items")
    .insert([orderObj])
    .select();
  if (error) throw new Error(error.message);
  return data;
}

// let { data: order_items, error } = await supabase
//   .from("order_items")
//   .select("*")
//   .eq("order_id", OrderId);
