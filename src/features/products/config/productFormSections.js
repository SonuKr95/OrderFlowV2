export const PRODUCT_FORM_SECTIONS = [
  {
    title: "Basic Information",
    fields: [
      {
        name: "name",
        label: "Product Name",
        type: "text",
        placeholder: "Product name",
      },
      {
        name: "category_id",
        label: "Category",
        type: "select",
        placeholder: "Select product category",
      },
      {
        name: "sku",
        label: "SKU",
        type: "text",
        placeholder: "Product SKU",
      },
    ],
  },

  {
    title: "Pricing",
    fields: [
      {
        name: "selling_price",
        label: "Selling Price",
        type: "number",
        placeholder: "₹",
      },
      {
        name: "mrp",
        label: "MRP",
        type: "number",
        placeholder: "₹",
      },
    ],
  },

  {
    title: "Tax Rate",
    fields: [
      {
        name: "tax_rate",
        label: "Tax Rate",
        type: "select",
        placeholder: "Select applicable tax rate",
      },
    ],
  },
  {
    title: "Inventory",
    fields: [
      {
        name: "quantity",
        label: "Stock Available",
        type: "number",
        placeholder: "Quantity",
      },
    ],
  },
];
