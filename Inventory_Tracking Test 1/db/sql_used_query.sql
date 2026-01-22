
-- /api/warehouses/:id/stock
SELECT products.product_name, warehouse_stock.quantity FROM warehouse_stock JOIN products ON products.product_id = warehouse_stock.product_id WHERE warehouse_stock.warehouse_id = 1

-- get all orders
-- /api/orders
SELECT orders.order_id, orders.customer_name, orders.warehouse_id, products.product_name, order_items.quantity, order_items.price FROM order_items JOIN orders ON order_items.order_id = orders.order_id JOIN products ON order_items.product_id = products.product_id


-- Cancel Order

BEGIN

	DECLARE res INT DEFAULT 0;
    DECLARE done INT DEFAULT 0;
    DECLARE productID INT DEFAULT 0;
    DECLARE productQua INT DEFAULT 0;
    DECLARE warehouseID INT DEFAULT 0;
    DECLARE proCursor CURSOR FOR SELECT order_items.product_id, order_items.quantity, orders.warehouse_id FROM order_items 		JOIN orders ON orders.order_id = order_items.order_id WHERE order_items.order_id = in_orderID;
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;
    
    IF EXISTS (SELECT orders.order_id FROM orders WHERE orders.order_id = in_orderID AND orders.status = 'PLACED' ) THEN
    
        OPEN proCursor;
        
        REPEAT
        	FETCH proCursor INTO productID, productQua, warehouseID;
            IF NOT done THEN
            	UPDATE warehouse_stock SET warehouse_stock.quantity = (warehouse_stock.quantity + productQua) WHERE 					warehouse_stock.product_id = productID AND warehouse_stock.warehouse_id = warehouseID;
                
                DELETE FROM order_items WHERE order_items.order_id = in_orderID;
                DELETE FROM orders WHERE orders.order_id = in_orderID;
                
			END IF;
		UNTIL done END REPEAT;
                
        SET res = 1;
        SET result = res;
        
	ELSE
    	SET res = -1;
        SET result = res;
	END IF;
    
END


-- Place Order

BEGIN
	
	DECLARE i INT DEFAULT 0;
	DECLARE res INT DEFAULT 0;
    DECLARE l_ordID INT DEFAULT 0;
    DECLARE jsonArray JSON;
    
    
    SET jsonArray = JSON_ARRAY(in_items);
    
    
    IF EXISTS (SELECT 1 FROM warehouses WHERE warehouses.warehouse_id = in_warehouse_id) THEN
    	INSERT INTO orders (customer_name, order_date, warehouse_id, status)
    VALUES (in_customer_name, CURRENT_DATE, in_warehouse_id, 'PLACED');
    
    SET l_ordID = LAST_INSERT_ID();
    
     WHILE i < JSON_LENGTH(in_items) DO
    INSERT INTO order_items (order_id, product_id, quantity, price)
    VALUES (
        l_ordid,
        JSON_UNQUOTE(JSON_EXTRACT(in_items, CONCAT('$[', i, '].product_id'))),
        JSON_UNQUOTE(JSON_EXTRACT(in_items, CONCAT('$[', i, '].quantity'))),
        (SELECT products.price * (JSON_UNQUOTE(JSON_EXTRACT(in_items, CONCAT('$[', i, '].quantity')))) FROM products WHERE products.product_id = JSON_UNQUOTE(JSON_EXTRACT(in_items, CONCAT('$[', i, '].product_id'))))
    );
    SET i = i + 1;
END WHILE;   
        SET res = 1;
        SET result = l_ordid;
	ELSE
    	SET res = -1;
        SET result = res;
    END IF;
    
END



-- Get all orders

SELECT orders.order_id, orders.customer_name, orders.warehouse_id, products.product_name, order_items.quantity, order_items.price FROM order_items JOIN orders ON order_items.order_id = orders.order_id JOIN products ON order_items.product_id = products.product_id ORDER BY orders.order_id