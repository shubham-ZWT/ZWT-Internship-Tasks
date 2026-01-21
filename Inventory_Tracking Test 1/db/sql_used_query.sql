
-- /api/warehouses/:id/stock
SELECT products.product_name, warehouse_stock.quantity FROM warehouse_stock JOIN products ON products.product_id = warehouse_stock.product_id WHERE warehouse_stock.warehouse_id = 1

-- get all orders
-- /api/orders
SELECT orders.order_id, orders.customer_name, orders.warehouse_id, products.product_name, order_items.quantity, order_items.price FROM order_items JOIN orders ON order_items.order_id = orders.order_id JOIN products ON order_items.product_id = products.product_id
