import { useState } from "react";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { useProductList } from "../hooks/useProductList";
import { formatDateTime } from "../../../utils/dateFormat";
import { editicon } from "../../../icons/_index";
import { deleteicon } from "../../../icons/_index";
import CategoryCards from "../..//..//components/cards/CategoryCards";
import List from "../../../components/ui/List";
import useEditModal from "../../../app/context/hook/_useEditModal";
// import EditModal from "../../../components/ui/EditModal";
import EditContainer from "../../../components/ui/EditContainer";
import { useList } from "../../../app/context/hook/_useList";

function ProductList() {
  const { editModalClicked, toggleEditModal } = useEditModal();
  const { list } = useList();

  function handleEditBtnClicked(product) {
    // console.log("CLICKED", product);
    toggleEditModal();
    setselectedProduct(product);
  }
  const [selectedProduct, setselectedProduct] = useState(null);

  const productList = useProductList();
  const deleteProduct = useDeleteProduct();
  console.log(productList);

  return (
    <div className="grid-row-2 relative grid gap-15 bg-[#D1D5DB] px-5 py-4">
      {/* {editBtnClicked && <EditProductModal product={selectedProduct} />} */}
      <p>Add Product</p>
      <div className="flex flex-wrap justify-between gap-5">
        <CategoryCards />
      </div>
      <List colStart={1} rowStart={3}>
        {productList?.map((product) => (
          <>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                {product.sku ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.name ?? "null"}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.price ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {formatDateTime(product.created_at) ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {formatDateTime(product.updated_at) ?? null}
              </td>

              <td className="px-4 py-2 whitespace-nowrap">
                <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                  In Stock
                </span>
              </td>
              <td>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => handleEditBtnClicked(product)}>
                    <img src={editicon} alt="" />
                  </button>
                  <button
                    onClick={() => deleteProduct.mutate(product.product_id)}
                    // data-product-id={prod.product_id}
                  >
                    <img src={deleteicon} alt="" />
                  </button>
                </div>
              </td>
            </tr>

            {/* <button data-productId=>XX</button> */}
          </>
        ))}
        {editModalClicked && (
          <EditContainer list={list} product={selectedProduct} />
        )}
      </List>
    </div>
  );
}

export default ProductList;
