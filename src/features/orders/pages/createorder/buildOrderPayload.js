export function buildOrderPayload(orderObject) {
  const { customerId, cartProducts, paymentMethodSelected } = orderObject;
  console.log(orderObject);
  const sanitizedProducts = cartProducts.map(({ id, quantityCount }) => ({
    product_id: id,
    qty: quantityCount,
  }));

  return {
    customerId,
    paymentMethodSelected,
    sanitizedProducts,
  };
}
