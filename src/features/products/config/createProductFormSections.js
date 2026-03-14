export const CREATE_PRODUCT_FORM_SECTIONS = [
  {
    title: "Basic Information",
    fields: [
      {
        name: "_name",
        label: "Product Name",
        type: "text",
        placeholder: "Product name",
      },
      {
        name: "_category_id",
        label: "Category",
        type: "select",
        placeholder: "Select product category",
      },
      {
        name: "_sku",
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
        name: "_selling_price",
        label: "Selling Price",
        type: "number",
        placeholder: "₹",
      },
      {
        name: "_mrp",
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
        name: "_tax_rate",
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
        name: "_quantity",
        label: "Stock Available",
        type: "number",
        placeholder: "Quantity",
      },
    ],
  },
];
