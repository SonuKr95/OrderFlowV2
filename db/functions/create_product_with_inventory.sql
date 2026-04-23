-- create_product_with_inventory
CREATE OR REPLACE FUNCTION create_product_with_inventory(_name text, _sku text, _category_id uuid, _mrp integer, _selling_price integer, _tax_rate integer, _quantity integer )
RETURNS jsonb
LANGUAGE plpgsql
AS $$

declare
    new_product_id uuid;
begin

    insert into public.products(name, sku, category_id, mrp, selling_price, tax_rate)
    values (_name, _sku, _category_id, _mrp, _selling_price, _tax_rate)
    returning id into new_product_id;

    insert into public.inventory(product_id, quantity)
    values (new_product_id, _quantity);

 return jsonb_build_object(
  'id', new_product_id,
  'sku', _sku
);

end;

$$;
