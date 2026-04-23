-- =========================================
-- Table: products
-- =========================================
-- FK relationships
ALTER TABLE public.products
ADD CONSTRAINT products_category_id_fkey
FOREIGN KEY (category_id) REFERENCES categories(id);

-- Ensure valid product status
ALTER TABLE public.products
ADD CONSTRAINT products_status_check
CHECK (
  status = ANY (ARRAY[
          'active'::text,
          'inactive'::text,
          'archived'::text])
);

-- Ensure SKU is not empty or whitespace
ALTER TABLE public.products
ADD CONSTRAINT sku_not_empty
CHECK (
  length(trim(both FROM sku)) > 0
);

-- =========================================
-- Table: categories
-- =========================================
-- Unique category name
ALTER TABLE public.categories
ADD CONSTRAINT categories_name_key unique (name);

-- =========================================
-- Table: customers
-- =========================================
-- Unique customer phone number
ALTER TABLE public.customers
ADD CONSTRAINT customers_phone_number_unique unique (phone_number);

-- Ensure customer name is not empty or whitespace
ALTER TABLE public.customers
ADD CONSTRAINT customers_name_not_empty
CHECK (
  length(trim(both FROM name)) > 0
);

-- Ensure customer phone number is not empty or whitespace
ALTER TABLE public.customers
ADD CONSTRAINT customers_phone_not_empty
CHECK (
  length(trim(both FROM phone_number)) > 0
);

-- =========================================
-- Table: inventory
-- =========================================
-- Ensure non negative quantity 
ALTER TABLE public.inventory
ADD CONSTRAINT quantity_non_negative
CHECK (
  (quantity >= 0)
);

-- FK relationships
ALTER TABLE public.inventory
ADD CONSTRAINT inventory_product_id_fkey
FOREIGN KEY (product_id) REFERENCES products (id) on DELETE CASCADE;

-- =========================================
-- Table: inventory_transactions
-- =========================================
-- FK relationships
ALTER TABLE public.inventory_transactions
ADD CONSTRAINT inventory_transactions_product_id_fkey
FOREIGN KEY (product_id) REFERENCES products (id);


-- Ensure valid inventory transaction reason
ALTER TABLE public.inventory_transactions
ADD CONSTRAINT inventory_transactions_reason_check
CHECK (
   transaction_reason = ANY (ARRAY[
          'SALE'::text,
          'PURCHASE'::text,
          'ADJUSTMENT'::text,
          'RETURN'::text,
          'CORRECTION'::text,
          'OTHER'::text,
          'DAMAGE'::text,
          'ORDER'::text
        ])
);

-- =========================================
-- Table: orders
-- =========================================
-- Order number uniqueness
ALTER TABLE public.orders
ADD CONSTRAINT orders_order_number_key unique (order_number);

-- Ensure valid order status
ALTER TABLE public.orders
ADD CONSTRAINT orders_status_check CHECK (
   status = ANY (ARRAY[
          'pending'::text,
          'confirmed'::text,
          'processing'::text,
          'shipped'::text,
          'delivered'::text,
          'cancelled'::text
        ])
);;

-- =========================================
-- Table: order_items
-- ========================================
-- FK relationships
ALTER TABLE public.order_items
ADD CONSTRAINT order_items_order_id_fkey
FOREIGN KEY (order_id) REFERENCES orders (id) on DELETE CASCADE;

ALTER TABLE public.order_items
ADD CONSTRAINT order_items_product_id_fkey
FOREIGN KEY (product_id) REFERENCES products (id)

-- Ensure quantity is greater than 0 
ALTER TABLE public.order_items
ADD CONSTRAINT order_items_quantity_check 
CHECK (
  (quantity > 0)
);