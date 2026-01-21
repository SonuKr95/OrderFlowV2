export function buildOrderPayload(orderObj) {
  console.log(orderObj);
  const {
    customerId,
    products,
    tax,
    shipping,
    subTotal,
    totalPayable,
    paymentMethod,
  } = orderObj;

  const payload = {
    order_id: crypto.randomUUID(),
    customer_id: customerId,
    status: "pending",
    payment_status: paymentMethod === "cod" ? "pending" : "paid",
    subtotal: subTotal,
    tax: tax,
    shipping_cost: shipping,
    total_amount: totalPayable,
  };

  console.log(payload);

  return payload;
}

// {
//     "product_id": "d61d9dcb-f00f-4877-87c7-d426b8a09f28",
//     "sku": "Strawberries",
//     "name": "Organic Strawberries, 1 Lb",
//     "price": 399,
//     "quantityCount": 3,
//     "total": 1197
// }
