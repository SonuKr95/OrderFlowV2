--update_inventory
CREATE OR REPLACE FUNCTION update_inventory(payload jsonb)
RETURNS text
LANGUAGE plpgsql
AS $$

DECLARE
    _product_id uuid;
    _type text;
    _quantity int;
    _reason text;
    _current_quantity int;
BEGIN

    -- Extract payload values
    _product_id := (payload->>'id')::uuid;
    _type := payload->>'_type';
    _quantity := (payload->>'_quantity')::int;
    _reason := payload->>'_reason';

    -- Basic validation
    IF _quantity <= 0 THEN
        RAISE EXCEPTION 'Adjusted quantity must be greater than 0';
    END IF;

    -- Lock row to prevent race conditions
    SELECT quantity
    INTO _current_quantity
    FROM public.inventory
    WHERE product_id = _product_id
    FOR UPDATE;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Inventory record not found for product %', _product_id;
    END IF;

    ---------------------------------------------------------
    -- ADD INVENTORY
    ---------------------------------------------------------
    IF _type = 'ADD' THEN

        UPDATE public.inventory
        SET quantity = _current_quantity + _quantity
        WHERE product_id = _product_id;
    ---------------------------------------------------------
    -- REDUCE INVENTORY
    ---------------------------------------------------------
    ELSIF _type = 'REDUCE' THEN

        IF _quantity > _current_quantity THEN
            RAISE EXCEPTION 
            'Insufficient inventory. Available %, Requested %',
            _current_quantity, _quantity;
        END IF;

        UPDATE public.inventory
        SET quantity = _current_quantity - _quantity
        WHERE product_id = _product_id;

    ELSE
        RAISE EXCEPTION 'Invalid adjustment type';
    END IF;

    ---------------------------------------------------------
    -- INSERT TRANSACTION RECORD
    ---------------------------------------------------------
    INSERT INTO public.inventory_transactions (
        product_id,
        transaction_type,
        transaction_quantity,
        transaction_reason
    )
    VALUES (
        _product_id,
        _type,
        _quantity,
        _reason
    
        
    );

    RETURN 'Inventory updated successfully';

END;

$$;
