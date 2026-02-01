import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../productApi";
import { fetchInventoryForProductsList } from "../../inventory/inventoryApi";

export function useProductsWithInventory() {
  return useQuery({
    queryKey: ["products-with-inventory"],
    queryFn: async () => {
      const [products, inventory] = await Promise.all([
        fetchProducts(),
        fetchInventoryForProductsList(),
      ]);
      return { products, inventory };
    },
    select: ({ products, inventory }) => {
      const inventoryMap = new Map(
        inventory.map((item) => [item.id, item.quantity]),
      );

      return products.map((product) => ({
        ...product,
        quantity: inventoryMap.get(product.id) ?? 0,
      }));
    },
  });
}
