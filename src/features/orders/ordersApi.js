import supabase from "../../services/supabase";

export async function getOrders() {
  const { data: orders, error } = await supabase.from("orders").select("*");
  if (error) throw new Error(error.message);
  return orders;
}

export async function getOrderAmountByOrderId(orderId) {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("subtotal,tax,shipping_cost,total_amount, status")
    .eq("order_id", orderId);
  if (error) throw new Error(error.message);
  return orders;
}
export async function updateOrderStatus({ orderId, statusSelected }) {
  console.log(orderId);
  console.log(statusSelected);
  const { data, error } = await supabase
    .from("orders")
    .update({ status: statusSelected })
    .eq("order_id", orderId)
    .select();
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
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
    .select()
    .single();
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function createOrderItem(orderObj) {
  const { data, error } = await supabase
    .from("order_items")
    .insert(orderObj)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

export async function createOrderStatusHistory(payload) {
  console.log(payload);
  const { data, error } = await supabase
    .from("order_status_history")
    .insert(payload)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

export async function getOrderStatusHistoryByOrderId(orderId) {
  const { data: order_status_history, error } = await supabase
    .from("order_status_history")
    .select("*")
    .eq("order_id", orderId);
  if (error) throw new Error(error.message);
  return order_status_history;
}

// let { data: order_items, error } = await supabase
//   .from("order_items")
//   .select("*")
//   .eq("order_id", OrderId);
