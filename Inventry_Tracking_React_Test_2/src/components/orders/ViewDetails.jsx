import React from "react";
import { formatCurrency } from "../../utils/formatter";

export default function ViewDetails({ d }) {
  return (
    <div className="text w-full p-4 bg-[#f8f8f8]">
      <div className="shadow-lg shadow-blue-200">
        <table className="w-full text-left border-collapse ">
          <thead>
            <tr className="bg-gray-50 dark:bg-black/40 border-b border-gray-200">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
                Product Name
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
                Quantity
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-center">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:bg-black/40">
            {d.items.length > 0 ? (
              <>
                {d.items.map((i) => (
                  <tr
                    key={i.product_name}
                    className="hover:bg-blue-50/50 transition-colors group items-center"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-app-text">
                      {i.product_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-app-text ">
                      {i.quantity}
                    </td>
                    <td className="px-6 py-4 text-sm text-app-text text-center ">
                      {formatCurrency(i.price)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-3 text-right text-app-text"
                  >
                    <p className="w-full pr-30">
                      Grand Total :
                      {formatCurrency(
                        d.items
                          .map((i) => i.quantity * i.price)
                          .reduce((a, b) => a + b, 0),
                      )}
                    </p>
                  </td>
                </tr>
              </>
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-12 text-center text-app-text"
                >
                  <p className="text-lg">No matching departments found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
