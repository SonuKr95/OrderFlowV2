// 1. Validate inventory for all items
// 2. If any invalid → throw error
// 3. Create order
// 4. Create order_items
// 5. Reduce inventory

import { createOrder } from "../ordersApi";
import { createOrderItem } from "../ordersApi";
import { createOrderStatusHistory } from "../ordersApi";
import { fetchInventoryById } from "../../inventory/inventoryApi";
import { useMutation } from "@tanstack/react-query";
import { adjustStock } from "../../inventory/inventoryApi";

export function useCreateOrder() {
  // const adjustInventoryMutation = useAdjustStock();
  return useMutation({
    mutationKey: ["createOrder"],
    mutationFn: async ({ payload, products }) => {
      const orderItemPayload = await Promise.all(
        products.map(async (p) => {
          const { quantity: inventoryAvailable } = await fetchInventoryById(
            p.id,
          );
          if (p.quantityCount > inventoryAvailable)
            throw new Error(
              `Insufficient stock for ${p.name.toUpperCase()} ; Available: ${inventoryAvailable} `,
            );
          return {
            product_id: p.id,
            product_name: p.name,
            price_at_purchase: p.selling_price,
            quantity: p.quantityCount,
          };
        }),
      );

      const order = await createOrder(payload);
      const { order_id, status } = order;

      const orderItemPayloadFormatted = orderItemPayload.map((item) => ({
        ...item,
        order_id,
      }));
      await createOrderItem(orderItemPayloadFormatted);
      const orderStatusHistoryPayload = {
        order_id: order_id,
        status: status,
        changed_by: "system",
      };
      await createOrderStatusHistory(orderStatusHistoryPayload);
      for (const product of products) {
        await adjustStock({
          id: product.id,
          adjustment_type: "REDUCE",
          adjusted_quantity: product.quantityCount,
        });
      }
      return order;
    },
  });
}
