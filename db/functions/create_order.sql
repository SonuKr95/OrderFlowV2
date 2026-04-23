-- create_order
CREATE OR REPLACE FUNCTION create_order(payload jsonb)
RETURNS jsonb
LANGUAGE plpgsql
AS $$

DECLARE
    _order_id uuid;
    _order_number text;
    _customer_id text;
    _customer_name text;
    _customer_phone text;
    _product jsonb;
    _product_id uuid;
    _qty numeric;
    _base_price numeric;
    _price numeric;
    _tax_rate numeric;
    _itemtotal numeric := 0;
    _tax_total numeric := 0;
    _total_amount numeric := 0;
    _available_qty numeric;
BEGIN
    --------------------------------------------------
    -- 1. Extract payload
    --------------------------------------------------
    _customer_id := payload->>'customer_id';

    --------------------------------------------------
    -- 2. Resolve customer (if not guest)
    --------------------------------------------------
    IF _customer_id != 'guest' THEN
        SELECT name, phone_number
        INTO _customer_name, _customer_phone
        FROM public.customers
        WHERE id = _customer_id::uuid; 

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Invalid customer ID';
        END IF;
    ELSE
        _customer_name := 'Guest';
        _customer_phone := NULL;
    END IF;

    --------------------------------------------------
    -- 3. LOCK inventory rows
    --------------------------------------------------
    FOR _product IN
        SELECT * FROM jsonb_array_elements(payload->'sanitizedProducts')
    LOOP
        _product_id := (_product->>'product_id')::uuid;

        -- Lock row
        PERFORM 1
        FROM public.inventory
        WHERE product_id = _product_id
        FOR UPDATE;

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Inventory not found for product %', _product_id;
        END IF;
    END LOOP;

    --------------------------------------------------
    -- 4. Validate stock AFTER locking
    --------------------------------------------------
    FOR _product IN
        SELECT * FROM jsonb_array_elements(payload->'sanitizedProducts')
    LOOP
        _product_id := (_product->>'product_id')::uuid;
        _qty := (_product->>'qty')::numeric;


       
        IF _qty <= 0 THEN
            RAISE EXCEPTION 'Invalid quantity for product %', _product_id;
        END IF;


        SELECT quantity
        INTO _available_qty
        FROM public.inventory
        WHERE product_id = _product_id;

        IF _available_qty < _qty THEN
            RAISE EXCEPTION 'Insufficient stock for product %', _product_id;
        END IF;
    END LOOP;

    --------------------------------------------------
    -- 5. Calculate totals
    --------------------------------------------------
    FOR _product IN
        SELECT * FROM jsonb_array_elements(payload->'sanitizedProducts')
    LOOP
        _product_id := (_product->>'product_id')::uuid;
        _qty := (_product->>'qty')::numeric;

        SELECT selling_price, tax_rate,     ROUND((selling_price / (1 + (COALESCE(tax_rate, 0) / 100)))::numeric, 2)
        INTO _price, _tax_rate, _base_price
        FROM public.products
        WHERE id = _product_id;

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Product not found %', _product_id;
        END IF;

        _itemtotal := _itemtotal + (_base_price * _qty);

         
        _tax_total := _tax_total + ((_base_price * _qty) * COALESCE(_tax_rate, 0) / 100);
    END LOOP;

    _total_amount := _itemtotal + _tax_total;

    --------------------------------------------------
    -- 6. Create order
    --------------------------------------------------
    _order_number := generate_order_number();

    INSERT INTO public.orders (
        order_number,
        customer_name,
        customer_phone,
        payment_method,
        subtotal,
        tax_amount,
        total_amount
    )
    VALUES (
        _order_number,
        _customer_name,
        _customer_phone,
        payload->>'payment_method',
        _itemtotal,
        _tax_total,
        _total_amount
    )
    RETURNING id INTO _order_id;

    --------------------------------------------------
    -- 7. Insert order_items + deduct inventory + log
    --------------------------------------------------
    FOR _product IN
        SELECT * FROM jsonb_array_elements(payload->'sanitizedProducts')
    LOOP
        _product_id := (_product->>'product_id')::uuid;
        _qty := (_product->>'qty')::numeric;

        SELECT selling_price
        INTO _price
        FROM public.products
        WHERE id = _product_id;

        -- Insert order item
        INSERT INTO public.order_items (
            order_id,
            product_id,
            quantity,
            unit_price,
	    subtotal
        )
        VALUES (
            _order_id,
            _product_id,
            _qty,
            _price,
	    (_qty * _price)

        );

        -- Deduct inventory
        UPDATE public.inventory
        SET quantity = quantity - _qty
        WHERE product_id = _product_id
        AND quantity >= _qty;

       IF NOT FOUND THEN
    RAISE EXCEPTION 'Concurrent update detected for product %', _product_id;
    END IF;



        -- Log transaction
        INSERT INTO public.inventory_transactions (
            product_id,
	    transaction_reference_id,
	    transaction_type,
            transaction_quantity,
            transaction_reason
        )
        VALUES (
            _product_id,
            _order_id,
            'REDUCE',
            _qty,
            'ORDER'
           
        );
    END LOOP;

    --------------------------------------------------
    -- 8. Return success
    --------------------------------------------------
    RETURN jsonb_build_object(
        'order_id', _order_id,
        'order_number', _order_number,
        'total_amount', _total_amount
    );

EXCEPTION
    WHEN OTHERS THEN
        RAISE; -- full rollback automatically
END;

$$;
