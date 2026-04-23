-- PRODUCTS
create table public.products (
  id uuid primary key not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  deleted_at timestamp with time zone null,
  name text not null,
  sku text not null,
  category_id uuid not null,
  status text not null default 'active'::text,
  mrp numeric(10, 2) not null,
  selling_price numeric(10, 2) not null,
  tax_rate numeric(5, 2) not null
) 

-- CATEGORIES
create table public.categories (
  id uuid primary key not null default gen_random_uuid (),
  name text not null,
  created_at timestamp with time zone null default now()
);

-- CUSTOMERS
create table public.customers (
  id uuid primary key not null default gen_random_uuid (),
  name text not null,
  phone_number text not null,
  address text null,
  created_at timestamp with time zone not null default now()
) 

-- INVENTORY
create table public.inventory (
  product_id uuid primary key not null,
  quantity integer not null,
  lowstock_threshold integer not null default 10,
  updated_at timestamp with time zone not null default now(),
  status text null
)

-- INVENTORY TRANSACTIONS
create table public.inventory_transactions (
  id uuid primary key not null default gen_random_uuid (),
  product_id uuid not null,
  transaction_type text not null,
  transaction_reason text not null,
  created_at timestamp with time zone not null default now(),
  transaction_quantity integer not null,
  transaction_reference_id uuid null
)

-- ORDERS
create table public.orders (
  id uuid primary key not null default gen_random_uuid (),
  order_number text not null default generate_order_number (),
  customer_name text null,
  customer_phone text null,
  status text not null default 'pending'::text,
  subtotal numeric(10, 2) not null,
  tax_amount numeric(10, 2) not null default 0,
  discount_amount numeric(10, 2) not null default 0,
  total_amount numeric(10, 2) not null,
  notes text null,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  payment_method text not null
)

-- ORDER ITEMS
create table public.order_items (
  id uuid primary key not null default gen_random_uuid (),
  order_id uuid not null,
  product_id uuid not null,
  quantity integer not null,
  unit_price numeric(10, 2) not null,
  subtotal numeric(10, 2) not null,
  created_at timestamp with time zone null default now()
)



