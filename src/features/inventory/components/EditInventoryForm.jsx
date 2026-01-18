import { useUpdateInventoryForm } from "../hooks/useUpdateInventoryForm";
import { EditModal } from "../../../components/ui/EditModal";

export default function EditInventoryForm({ product }) {
  const { register, onSubmit } = useUpdateInventoryForm(product);
  const {
    product_id,
    quantity,
    updated_at,
    products: { sku, name },
  } = product;

  const selectedProduct = {
    product_id,
    quantity,
    updated_at,
    sku,
    name,
  };

  return (
    <EditModal
      product={selectedProduct}
      register={register}
      onSubmit={onSubmit}
    ></EditModal>
  );

  // return (
  //   <>
  //     <form onSubmit={onSubmit}>
  //       <input
  //         {...register("quantity")}
  //         type="text"
  //         placeholder="enter new
  //       quantity"
  //         defaultValue={product.quantity}
  //       />
  //       <button className="bg-teal-400 px-2.5 py-2.5" type="submit">
  //         Update Inventory
  //       </button>
  //     </form>
  //   </>
  // );
}
