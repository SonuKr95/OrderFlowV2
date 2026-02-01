import { useQuery } from "@tanstack/react-query";
import { fetchProductsForInventoryList } from "../../products/productApi";
import { fetchInventory } from "../inventoryApi";

export function useActiveInventory() {
  return useQuery({
    queryKey: ["active-inventory"],
    queryFn: async () => {
      const [products, inventory] = await Promise.all([
        fetchProductsForInventoryList(),
        fetchInventory(),
      ]);
      return { products, inventory };
    },

    // TODO: Move filtering to DB join when inventory grows

    select: ({ products, inventory }) => {
      const inventoryMap = new Map(
        inventory.map((item) => [
          item.id,
          {
            quantity: item.quantity,
            updated_at: item.updated_at,
            updated_by: item.updated_by,
          },
        ]),
      );

      return products.map((product) => {
        const inventoryRecord = inventoryMap.get(product.id);
        return {
          ...product,
          ...(inventoryRecord ?? {
            quantity: 0,
            updated_at: null,
            updated_by: null,
          }),
        };
      });
    },
  });
}
