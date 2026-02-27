import React from "react";

export default function ReviewConfirmForm({
  customerName,
  warehouseId,
  items,
}) {
  return (
    <div className="border p-6 rounded flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Review Order</h2>

      <div className="text-xl">
        <p>
          <strong>Customer:</strong> {customerName}
        </p>
        <p>
          <strong>Warehouse ID:</strong> {warehouseId}
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Items:</h3>
        {items.length === 0 ? (
          <p>No items selected</p>
        ) : (
          <ul className="list-disc ml-5">
            {items.map((item) => (
              <li key={item.product_id}>
                Product ID: {item.product_id} | Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
