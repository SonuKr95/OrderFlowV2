import { useState } from "react";
import List from "../../../components/ui/List";
import { useGetInventory } from "../hooks/useInventory";
// import EditInventory from "../components/EditInventory";
import { editicon } from "../../../icons/_index";
import { formatDateTime } from "../../../utils/dateFormat";
// import OrdersList from "../orders/OrdersList";
import EditContainer from "../../../components/ui/EditContainer";
import { useList } from "../../../app/context/hook/useList";
import useEditModal from "../../../app/context/hook/useEditModal";

function InventoryMangement() {
  const inventory = useGetInventory();
  // const [updateButtonClicked, SetupdateButtonClicked] = useState(null);
  const [product, setProduct] = useState(null);
  const { list } = useList();
  const { editModalClicked, toggleEditModal } = useEditModal();

  function handleupdateButtonClicked(product) {
    toggleEditModal();
    setProduct(product);
  }

  // console.log(inventory);

  return (
    <>
      {editModalClicked && <EditContainer list={list} product={product} />}
      <List colStart={1} rowStart={3}>
        {inventory?.map((product) => {
          const {
            product_id,
            quantity,
            updated_at,
            products: { sku, name },
          } = product;

          // const { name: productName = "Unknown product", sku = "—" } =
          //   products || {};

          return (
            <>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  {sku ?? null}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {name ?? "null"}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {quantity ?? null}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {formatDateTime(updated_at) ?? null}
                </td>

                <td className="px-4 py-2 whitespace-nowrap">
                  <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    In Stock
                  </span>
                </td>
                <td>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => handleupdateButtonClicked(product)}>
                      <img src={editicon} alt="" />
                    </button>
                    {/* <button
                    onClick={() => deleteProduct.mutate(product.product_id)}
                    // data-product-id={prod.product_id}
                  >
                    <img src={deleteicon} alt="" />
                  </button> */}
                  </div>
                </td>
              </tr>

              {/* <button data-productId=>XX</button> */}
            </>

            // <div className="product-row flex justify-between">
            //   {/* <p>aaaaa</p> */}
            //   <span>{sku ?? null}</span>
            //   <span>{name ?? null}aaaa</span>
            //   {!updateButtonClicked && <span>{quantity ?? null}</span>}
            //   {updateButtonClicked && <EditInventory product={product} />}
            //   <span>{updated_at ?? null}</span>
            //   {/* <p>{product?.price ?? null}</p> */}
            //   {/* <p>{product?.created_At ?? null}</p> */}
            //   <div className="flex gap-2.5">
            //     <button onClick={() => handleupdateButtonClicked(product)}>
            //       update quantity
            //     </button>
            //   </div>
            // </div>
          );
        })}
        {/* {editModalClicked && <EditContainer product={product} />} */}
      </List>
    </>
  );
}

export default InventoryMangement;
