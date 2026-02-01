///TEMPORARY, REPLACE WITH DB IN FUTURE

import supabase from "../../../services/supabase";
import { useMutation } from "@tanstack/react-query";

// async function fetchInventoryById(id) {
//   console.log(id);
//   const { data, error } = await supabase
//     .from("inventory")
//     .select("quantity")
//     .eq("id", id)
//     .select()
//     .single();
//   if (error) throw error;
//   return data;
// }

// async function updateInventoryById(payload) {
//   const { id, ...updatedQuantity } = payload;
//   const { data, error } = await supabase
//     .from("inventory")
//     .update(updatedQuantity)
//     .eq("id", id)
//     .select()
//     .single();
//   if (error) throw error;
//   return data;
// }

// export function useAdjustStock() {
//   return useMutation({
//     mutationFn: async ({ id, adjusted_quantity, adjustment_type }) => {
//       const selectedProductQuantity = await fetchInventoryById(id);
//       const currentQuantity = selectedProductQuantity.quantity;
//       console.log(currentQuantity);
//       if (adjustment_type === "ADD") {
//         const payload = {
//           id,
//           quantity: currentQuantity + Number(adjusted_quantity),
//         };

//         return updateInventoryById(payload);
//       }
//       if (adjustment_type === "REDUCE") {
//         const payload = {
//           id,
//           quantity: currentQuantity - Number(adjusted_quantity),
//         };

//         return updateInventoryById(payload);
//       }
//     },
//   });
// }

///UPDATED

async function fetchInventoryById(id) {
  const { data, error } = await supabase
    .from("inventory")
    .select("quantity")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

async function updateInventoryById({ id, quantity }) {
  const { data, error } = await supabase
    .from("inventory")
    .update({ quantity })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export function useAdjustStock() {
  return useMutation({
    mutationFn: async ({ id, adjusted_quantity, adjustment_type }) => {
      const qty = Number(adjusted_quantity);

      if (qty <= 0) {
        throw new Error("Adjustment quantity must be positive");
      }

      const { quantity: currentQuantity } = await fetchInventoryById(id);

      let newQuantity = currentQuantity;

      if (adjustment_type === "ADD") {
        newQuantity += qty;
      }

      if (adjustment_type === "REDUCE") {
        if (qty > currentQuantity) {
          throw new Error("Insufficient stock");
        }
        newQuantity -= qty;
      }

      return updateInventoryById({ id, quantity: newQuantity });
    },
  });
}
