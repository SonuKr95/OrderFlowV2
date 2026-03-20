import supabase from "../../services/supabase";
export async function createOrder(payload) {
  const { data, error } = await supabase.rpc("create_order", {
    payload: payload,
  });
  if (error) throw error;
  return data;
}

export async function fetchOrderList() {
  const { data, error } = await supabase
    .from("orders")
    .select("id,order_number, customer_name, status,total_amount,created_at");
  if (error) throw error;
  return data;
}

export async function fetchOrderDetailsByOrderId(orderId) {
  const { data, error } = await supabase.rpc("fetch_order_by_id", {
    p_order_id: orderId,
  });
  if (error) throw error;
  return data;
}

export async function updateOrderStatus({ orderId, statusSelected }) {
  // console.log(orderId);
  // console.log(statusSelected);
  const { data, error } = await supabase
    .from("orders")
    .update({ status: statusSelected })
    .eq("order_id", orderId)
    .select();
  if (error) throw new Error(error.message);
  console.log(data);
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
  const { data, error } = await supabase
    .from("order_status_history")
    .select("*")
    .eq("order_id", orderId);
  if (error) throw new Error(error.message);
  return data;
}
