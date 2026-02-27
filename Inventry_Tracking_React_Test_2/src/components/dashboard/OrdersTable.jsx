import React from "react";
import { formatCurrency, formatDate } from "../../utils/formatter";

export default function OrdersTable({ data }) {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-50 dark:bg-black/40 border-b border-gray-200">
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
            Order Id
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
            Customer Name
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-center">
            Order Date <span className="lowercase">(dd/mm/yyyy)</span>
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-center">
            Status
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-right">
            Total Amount
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white dark:bg-black/40">
        {data.length > 0 ? (
          data.map((d) => (
            <tr
              key={d.order_id}
              className="hover:bg-blue-50/50 transition-colors group"
            >
              <td className="px-6 py-4 text-sm font-semibold text-app-text">
                {d.order_id}
              </td>
              <td className="px-6 py-4 text-sm">{d.customer_name}</td>
              <td className="px-6 py-4 text-sm text-app-text text-center">
                {formatDate(d.order_date)}
              </td>
              <td className="px-6 py-4 text-sm text-app-text text-center">
                {d.status === "PLACED" ? (
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold bg-amber-200 text-amber-700 w-25">
                    Placed
                  </span>
                ) : d.status === "COMPLETED" ? (
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold bg-green-200 text-green-700 w-25">
                    Completed
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold bg-red-200 text-red-700 w-25">
                    Cancelled
                  </span>
                )}
              </td>
              <td className="px-6 py-4 text-sm text-app-text text-right">
                {formatCurrency(
                  d.items
                    .map((i) => i.price * i.quantity)
                    .reduce((a, b) => a + b, 0),
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="px-6 py-12 text-center text-app-text">
              <p className="text-lg">No matching departments found</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
