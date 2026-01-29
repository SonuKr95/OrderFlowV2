const STOCK_STATUS = {
  IN_STOCK: {
    label: "In Stock",
    className:
      "rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700",
  },

  LOW_STOCK: {
    label: "Running Low",
    className:
      "rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700",
  },

  OUT_OF_STOCK: {
    label: "Out of Stock",
    className: "rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-700",
  },
};

export function getStockStatus(quantity) {
  if (quantity <= 0) return STOCK_STATUS.OUT_OF_STOCK;
  if (quantity <= 5) return STOCK_STATUS.LOW_STOCK;
  return STOCK_STATUS.IN_STOCK;
}
