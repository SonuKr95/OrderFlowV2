export const inventoryTableColumns = [
  { key: "sku", label: "SKU" },
  { key: "product_name", label: "Product Name" },
  { key: "quantity", label: "Quantity Available" },
  { key: "", label: "Stock Health" },
  // { key: "updated_by", label: "Updated By" },
  { key: "updated_at", label: "Updated At" },
  {
    key: "actions",
    label: "Actions",
    align: "right",
    isAction: true,
  },
];
