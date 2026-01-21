import { createOrder } from "../ordersApi";
import { createOrderItem } from "../ordersApi";
import { useMutation } from "@tanstack/react-query";

export function useCreateOrder() {
  return useMutation({
    mutationKey: ["createOrder"],
    mutationFn: async ({ payload, products }) => {
      const order = await createOrder(payload);
      const [{ order_id }] = order;
      const orderItemPayload = products.map((p) => ({
        order_id: order_id,
        product_id: p.product_id,
        product_name: p.name,
        price_at_purchase: p.price,
        quantity: p.quantityCount,
      }));
      await createOrderItem(orderItemPayload);
      return order;
    },
  });
}
// onSuccess: (orderData) => {
//   const {
//     payload: { order_id },
//   } = orderData;
//   const { products } = orderData;

//   const orderItemPayload = products.map((p) => ({
//     order_id: order_id,
//     product_id: p.product_id,
//     product_name: p.name,
//     price_at_purchase: p.price,
//     quantity: p.quantityCount,
//   }));
//   createOrderItem(orderItemPayload);
// },
// });
