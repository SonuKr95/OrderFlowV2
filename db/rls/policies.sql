-- =========================================
-- ENABLE RLS
-- =========================================

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;


-- =========================================
-- COMMON CONDITIONS
-- =========================================

-- Admin + Staff condition
-- Used across multiple tables for write access
-- Ensures:
-- - Not anonymous
-- - Role is admin or staff

-- Expression:
-- (auth.jwt()->>'is_anonymous')::boolean IS FALSE
-- AND (auth.jwt()->>'user_role') IN ('admin','staff')



-- =========================================
-- PRODUCTS
-- =========================================

CREATE POLICY "products_read_all"
ON public.products
FOR SELECT
USING (true);

CREATE POLICY "products_insert_admin_staff"
ON public.products
FOR INSERT
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);

CREATE POLICY "products_update_admin_staff"
ON public.products
FOR UPDATE
USING (true)
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);


-- =========================================
-- CATEGORIES
-- =========================================

CREATE POLICY "categories_read_all"
ON public.categories
FOR SELECT
USING (true);

CREATE POLICY "categories_insert_admin_staff"
ON public.categories
FOR INSERT
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);

CREATE POLICY "categories_update_admin_staff"
ON public.categories
FOR UPDATE
USING (true)
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);


-- =========================================
-- CUSTOMERS
-- =========================================

CREATE POLICY "customers_read_all"
ON public.customers
FOR SELECT
USING (true);

CREATE POLICY "customers_insert_admin_staff"
ON public.customers
FOR INSERT
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);

CREATE POLICY "customers_update_admin_staff"
ON public.customers
FOR UPDATE
USING (true)
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);


-- =========================================
-- INVENTORY
-- =========================================

CREATE POLICY "inventory_read_all"
ON public.inventory
FOR SELECT
USING (true);

CREATE POLICY "inventory_insert_admin_staff"
ON public.inventory
FOR INSERT
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);

CREATE POLICY "inventory_update_admin_only"
ON public.inventory
FOR UPDATE
USING (true)
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') = 'admin'
);


-- =========================================
-- INVENTORY TRANSACTIONS
-- =========================================

CREATE POLICY "inventory_tx_read_all"
ON public.inventory_transactions
FOR SELECT
USING (true);

CREATE POLICY "inventory_tx_insert_admin_staff"
ON public.inventory_transactions
FOR INSERT
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);

-- =========================================
-- ORDERS
-- =========================================

CREATE POLICY "orders_read_all"
ON public.orders
FOR SELECT
USING (true);

CREATE POLICY "orders_insert_admin_staff"
ON public.orders
FOR INSERT
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);

CREATE POLICY "orders_update_admin_staff"
ON public.orders
FOR UPDATE
USING (true)
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);


-- =========================================
-- ORDER ITEMS
-- =========================================

CREATE POLICY "order_items_read_all"
ON public.order_items
FOR SELECT
USING (true);

CREATE POLICY "order_items_insert_admin_staff"
ON public.order_items
FOR INSERT
WITH CHECK (
  (auth.jwt()->>'is_anonymous')::boolean IS FALSE
  AND (auth.jwt()->>'user_role') IN ('admin','staff')
);




