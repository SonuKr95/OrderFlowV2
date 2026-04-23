-- search_products
CREATE OR REPLACE FUNCTION search_products(search_term text)
RETURNS TABLE (
    id uuid,
    name text,
    sku text,
    selling_price numeric
) 
LANGUAGE plpgsql
AS $$

DECLARE
    user_role text;
BEGIN
    user_role := (auth.jwt() ->> 'user_role');

    IF user_role IS NULL OR user_role NOT IN ('admin', 'staff') THEN
        RAISE EXCEPTION 'Access denied: Insufficient permissions.';
    END IF;

    RETURN QUERY
    SELECT 
        p.id,
        p.name,
        p.sku,
        p.selling_price
    FROM public.products p
    WHERE p.name ILIKE '%' || search_term || '%'
       OR p.sku ILIKE '%' || search_term || '%'
    LIMIT 20;
END;

$$;