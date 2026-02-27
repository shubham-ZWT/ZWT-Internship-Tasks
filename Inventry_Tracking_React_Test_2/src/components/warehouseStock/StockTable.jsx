import React from "react";
import { formatCurrency } from "../../utils/formatter";

export default function StockTable({ warehouseStock }) {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-50 dark:bg-black/40 border-b border-gray-200">
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
            Product Id
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
            Product Name
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
            SKU
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
            Unit Price
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-center">
            Quantity
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-center">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white dark:bg-black/40">
        {warehouseStock.length > 0 ? (
          <>
            {warehouseStock.map((s) => (
              <tr
                key={s.product_id}
                className="hover:bg-blue-50/50 transition-colors group"
              >
                <td className="px-6 py-4 text-sm font-semibold text-app-text">
                  {s.product_id}
                </td>
                <td className="px-6 py-4 text-sm text-app-text">
                  {s.product_name}
                </td>
                <td className="px-6 py-4 text-sm text-app-text">{s.sku}</td>
                <td className="px-6 py-4 text-sm text-app-text">
                  {formatCurrency(s.price)}
                </td>
                <td className="px-6 py-4 text-sm text-app-text text-center">
                  {s.quantity}
                </td>
                <td className="px-6 py-4 text-sm text-app-text text-center">
                  {s.quantity === 0 ? (
                    <span className="inline-flex items-center px-3 py-1 font-semibold rounded-full text-sm bg-red-200 text-red-700">
                      Out of Stock
                    </span>
                  ) : s.quantity <= 5 ? (
                    <span className="inline-flex items-center px-3 py-1 font-semibold rounded-full text-sm bg-amber-200 text-amber-700">
                      Low Stock
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 font-semibold rounded-full text-sm bg-green-200 text-green-700">
                      High Stock
                    </span>
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td
                colSpan="4"
                className="px-6 py-3 text-center text-app-text"
              ></td>
            </tr>
          </>
        ) : (
          <tr>
            <td colSpan="4" className="px-6 py-12 text-center text-app-text">
              <p className="text-lg">No Orders Found</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
