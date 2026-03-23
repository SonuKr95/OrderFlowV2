const STOCK_STATUS = {
  IN_STOCK: {
    label: "In Stock",
    className:
      "rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400",
  },

  LOW_STOCK: {
    label: "Running Low",
    className:
      "rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-400",
  },

  OUT_OF_STOCK: {
    label: "Out of Stock",
    className:
      "rounded-full bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400",
  },
};

export function getStockStatus(quantity) {
  if (quantity <= 0) return STOCK_STATUS.OUT_OF_STOCK;
  if (quantity <= 5) return STOCK_STATUS.LOW_STOCK;
  return STOCK_STATUS.IN_STOCK;
}
