import CategoryCards from "../..//..//components/cards/CategoryCards";
import List from "../../../components/ui/List";
import { useProductsWithInventory } from "../hooks/useProductsWithInventory";
import { productColumns } from "../constants/productColumns";
import { getStockStatus } from "../constants/stockStatus";
import { formatDateTime } from "../../../utils/dateFormat";
import { useDeleteProductById } from "../hooks/useDeleteProductById";
import toast from "react-hot-toast";
// import { useState } from "react";
import { queryClient } from "../../../app/queryClient";
// import { useProductList } from "../hooks/useProductList";
import { editicon } from "../../../icons/_index";
import { deleteicon } from "../../../icons/_index";
// import useEditModal from "../../../app/context/hook/_useEditModal";
// import EditModal from "../../../components/ui/EditModal";
// import EditContainer from "../../../components/ui/EditContainer";
// import { useList } from "../../../app/context/hook/_useList";

function ProductList() {
  const { data: productList = [] } = useProductsWithInventory();
  const deleteProductMutation = useDeleteProductById();

  const deleteProduct = (id) =>
    deleteProductMutation.mutate(id, {
      onSuccess: (product) => {
        toast.success(`Deleted ${product.name}`);
        queryClient.invalidateQueries({
          queryKey: ["products-with-inventory"],
        });
      },
    });

  // console.log(productList);
  // console.log(fetchProductList());
  // console.log(fetchInventoryList());
  // return <div>Product List</div>;

  // const { editModalClicked, toggleEditModal } = useEditModal();
  // const { list } = useList();

  // function handleEditBtnClicked(product) {
  //   // console.log("CLICKED", product);
  //   toggleEditModal();
  //   setselectedProduct(product);
  // }
  // const [selectedProduct, setselectedProduct] = useState(null);

  // const deleteProduct = useDeleteProduct();
  // console.log(productList);

  return (
    <div className="grid-row-2 relative grid gap-15 bg-[#D1D5DB] px-5 py-4">
      {/* {editBtnClicked && <EditProductModal product={selectedProduct} />} */}
      <p>Add Product</p>
      <div className="flex flex-wrap justify-between gap-5">
        <CategoryCards />
      </div>
      <List columns={productColumns} colStart={1} rowStart={3}>
        {productList?.map((product) => {
          const stock = getStockStatus(product.quantity);
          return (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-700">
                {product.sku ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.name ?? "null"}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.category ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.selling_price ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.mrp ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                <span className={stock.className}>{stock.label}</span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.status ?? null}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {formatDateTime(product.updated_at) ?? null}
              </td>
              <td>
                <div className="right flex flex-wrap items-center justify-around">
                  <button>
                    <img src={editicon} alt="editicon" />
                  </button>
                  <button onClick={() => deleteProduct(product.id)}>
                    <img src={deleteicon} alt="deleteicon" />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </List>
    </div>
  );
}

export default ProductList;
