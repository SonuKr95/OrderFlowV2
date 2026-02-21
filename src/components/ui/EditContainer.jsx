import EditInventoryForm from "../../features/inventory/components/EditInventoryForm";
import EditProductForm from "../../features/products/components/EditProductForm";

export default function EditContainer({ list, product }) {
  // We decide which component to render based on the list type
  if (list === "inventorylist") {
    return <EditInventoryForm product={product} />;
  }
  if (list === "productlist") {
    return <EditProductForm product={product} />;
  }
}
