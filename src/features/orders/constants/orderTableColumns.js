export const orderTableColumns = [
  { key: "order_number", label: "Order Number" },
  { key: "customer_name", label: "Customer Name" },
  { key: "status", label: "Status" },
  { key: "total_amount", label: "Total Amount" },
  // { key: "updated_by", label: "Updated By" },
  { key: "created_at", label: "Created At" },
  {
    key: "actions",
    label: "View Details",
    align: "right",
    isAction: true,
  },
];
