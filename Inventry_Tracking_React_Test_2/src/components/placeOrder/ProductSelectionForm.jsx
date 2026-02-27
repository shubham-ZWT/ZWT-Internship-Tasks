import React, { useEffect } from "react";
import { WarehouseService } from "../../services/warehouseService";

export default function ProductSelectionForm({
  warehouseId,
  items,
  setItems,
  products,
  setProducts,
}) {
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await WarehouseService.getWarehouseProducts(warehouseId);
      setProducts(response.stock);
    };
    fetchProducts();
  }, [warehouseId]);

  const handleQuantityChange = (productId, quantity) => {
    const qty = Number(quantity);

    setItems((prevItems) => {
      const is_existing = prevItems.find(
        (item) => item.product_id === productId,
      );

      if (qty <= 0) {
        return prevItems.filter((item) => item.product_id !== productId);
      }

      if (is_existing) {
        return prevItems.map((item) =>
          item.product_id === productId ? { ...item, quantity: qty } : item,
        );
      }

      return [...prevItems, { product_id: productId, quantity: qty }];
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center text-2xl">Product Selection</h1>

      <div className="flex flex-col   gap-3 items-center justify-center">
        {products.map((prod) => (
          <div
            key={prod.product_id}
            className="flex flex-row gap-1 items-center justify-between bg-orange-100 p-3 rounded-xl w-1/4"
          >
            <span className="p-2 rounded text-orange-600 font-semibold">
              {prod.product_name}
            </span>

            <div className="flex flex-row gap-1 items-center">
              <input
                type="number"
                min="0"
                value={
                  items.find((i) => i.product_id === prod.product_id)
                    ?.quantity || 0
                }
                onChange={(e) =>
                  handleQuantityChange(prod.product_id, e.target.value)
                }
                className="w-16 p-1 border border-gray-400 rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
