export function buildOrderPayload(orderObject) {
  const { products, customer_id, payment_method } = orderObject;
  // console.log(orderObject);
  const sanitizedProducts = products?.map(({ id, quantityCount }) => ({
    product_id: id,
    qty: quantityCount,
  }));

  return {
    customer_id,
    payment_method,
    sanitizedProducts,
  };
}
