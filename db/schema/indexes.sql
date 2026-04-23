-- =========================================
-- PRODUCTS INDEXES
-- =========================================

-- Enforce case-insensitive SKU uniqueness for active (non-deleted) products
CREATE UNIQUE INDEX IF NOT EXISTS idx_products_sku_unique
ON public.products USING btree (lower(sku))
WHERE deleted_at IS NULL;


-- =========================================
-- INVENTORY_TRANSACTIONS INDEXES
-- =========================================

-- Optimize lookups by product (used in logs, history, audits)
CREATE INDEX IF NOT EXISTS idx_inventory_transactions_product
ON public.inventory_transactions USING btree (product_id);


-- =========================================
-- ORDER_ITEMS INDEXES
-- =========================================

-- Optimize fetching items for a given order
CREATE INDEX IF NOT EXISTS idx_order_items_order
ON public.order_items USING btree (order_id);