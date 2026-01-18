import { useRef, useEffect } from "react";
import { useUpdateInventoryForm } from "../hooks/useUpdateInventoryForm";
// import { useEditForm } from "../../../utils/useEditForm";

function EditInventory({ product }) {
  console.log(product);

  const { register, onSubmit } = useUpdateInventoryForm(product);

  return (
    <>
      <form className="bg-amber-400" onSubmit={onSubmit}>
        <input
          {...register("quantity")}
          type="text"
          placeholder="enter new
        quantity"
          defaultValue={product.quantity}
        />
        <button className="bg-teal-400 px-2.5 py-2.5" type="submit">
          Update Inventory
        </button>
      </form>
    </>
  );
}

export default EditInventory;
