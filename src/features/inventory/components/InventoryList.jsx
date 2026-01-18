import { updateInventory } from "../../../services/inventoryApi";
import { useState } from "react";
import { useForm } from "react-hook-form";

const colStartClasses = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
};
const colEndClasses = {
  1: "col-end-1",
  2: "col-end-2",
  3: "col-end-3",
  4: "col-end-4",
  5: "col-end-5",
};
const rowStartClasses = {
  1: "row-start-1",
  2: "row-start-2",
  3: "row-start-3",
  4: "row-start-4",
};
const rowEndClasses = {
  1: "row-end-1",
  2: "row-end-2",
  3: "row-end-3",
  4: "row-end-4",
};

// function InventoryList({ children, colStart, colEnd, rowStart, rowEnd }) {
function InventoryList({ sku, name, quantity, updatedAt, productId }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, dirtyFields },
  } = useForm({
    defaultValues: { quantity: quantity },
  });

  const [isQuantityUpdate, setIsQuantityUpdate] = useState(false);
  function onSubmit(formData) {
    if (!isDirty) return;
    updateInventory(productId, formData);
    //  console.log(product_id);
    //  const payload = Object.keys(dirtyFields).reduce((acc, key) => {
    //    acc[key] = formData[key];
    //    return acc;
    //  }, {});
    //  // console.log(formData);

    //  console.log(payload);

    //  updateProduct(product_id, payload);
    // console.log();
  }
  // console.log(productId);
  return (
    // <div className=`{col-start-1 col-end-5 auto-rows-max bg-red-100}`>
    // <
    //   className={`${colStartClasses[colStart]} ${colEndClasses[colEnd]} ${rowStartClasses[rowStart]} ${rowEndClasses[rowEnd]} bg-red-200 px-2.5 py-2.5`}
    // >

    <div className="flex justify-between">
      <span>{sku}</span>
      <span>{name}</span>
      {!isQuantityUpdate && <span>{quantity}</span>}

      {isQuantityUpdate && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("quantity")}
            placeholder="Update quantity"
          ></input>{" "}
          <button
            type="submit"
            className="rounded-2xl bg-red-400 px-2.5 py-2.5 text-white"
          >
            {" "}
            Update Quantity
          </button>
        </form>
      )}
      {!isQuantityUpdate && (
        <button
          onClick={() => {
            setIsQuantityUpdate(true);
          }}
          className="rounded-2xl bg-red-400 px-2.5 py-2.5 text-white"
          // data-product-id={productId}
        >
          Update Quantity
        </button>
      )}
      <span>{updatedAt}</span>
    </div>

    // </div>
  );
}

export default InventoryList;
