-- get_dashboard_metrics
CREATE OR REPLACE FUNCTION get_dashboard_metrics()
RETURNS jsonb
LANGUAGE plpgsql
AS $$
DECLARE
    _current_role text;
    _total_sales_today numeric := 0;
    _orders_count_today integer := 0;
    _low_stock_count integer := 0;
    _out_of_stock_count integer := 0;
    _recent_orders jsonb := '[]'::jsonb;
BEGIN

  _current_role := auth.jwt() ->> 'user_role'; 

  IF _current_role = 'staff' THEN 
    RAISE EXCEPTION 'Access denied: Staff cannot get dashboard_stats'
    USING ERRCODE = 'P0001'; 
  END IF;
  
   
    -- Total sales today
    SELECT COALESCE(SUM(total_amount), 0)
    INTO _total_sales_today
    FROM public.orders
    WHERE created_at >= CURRENT_DATE
      AND created_at < CURRENT_DATE + INTERVAL '1 day';

    -- Orders count today
    SELECT COUNT(id)
    INTO _orders_count_today
    FROM public.orders
    WHERE created_at >= CURRENT_DATE
      AND created_at < CURRENT_DATE + INTERVAL '1 day';

    -- Low stock
    SELECT COUNT(product_id)
    INTO _low_stock_count
    FROM public.inventory
    WHERE quantity > 0 AND quantity <= 10;

    -- Out of stock
    SELECT COUNT(product_id)
    INTO _out_of_stock_count
    FROM public.inventory
    WHERE quantity = 0;

    -- Recent 5 orders
    SELECT COALESCE(jsonb_agg(row_to_json(t)), '[]'::jsonb)
    INTO _recent_orders
    FROM (
        SELECT id, order_number, total_amount, customer_name
        FROM public.orders
        ORDER BY created_at DESC
        LIMIT 5
    ) t;

    RETURN jsonb_build_object(
        'total_sales_today', _total_sales_today,
        'orders_count_today', _orders_count_today,
        'low_stock_count', _low_stock_count,
        'out_of_stock_count', _out_of_stock_count,
        'recent_orders', _recent_orders
    );

END;
$$;