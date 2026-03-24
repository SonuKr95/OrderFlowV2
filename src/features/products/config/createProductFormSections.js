export const CREATE_PRODUCT_FORM_SECTIONS = [
  {
    title: "Basic Information",
    fields: [
      {
        name: "_name",
        label: "Product Name",
        type: "text",
        placeholder: "Enter Product name",
        message: "Product name is required",
      },
      {
        name: "_category_id",
        label: "Category",
        type: "select",
        placeholder: "Select product category",
        message: "Product category is required",
      },
      {
        name: "_sku",
        label: "SKU",
        type: "text",
        placeholder: "Enter Product SKU",
        message: "Product SKU is required",
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
        placeholder: "Enter Product Selling Price",
        message: "Product Selling Price is required",
      },
      {
        name: "_mrp",
        label: "MRP",
        type: "number",
        placeholder: "Enter Product MRP",
        message: "Product MRP is required",
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
        message: "Product Tax Rate is required",
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
        placeholder: "Enter Quantity Available",
        message: "Product Inventory is required",
      },
    ],
  },
];
