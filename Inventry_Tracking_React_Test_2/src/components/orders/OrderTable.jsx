import React from "react";
import ViewDetails from "./ViewDetails";
import { useState } from "react";
import { OrderService } from "../../services/orderService";
import { formatCurrency, formatDate } from "../../utils/formatter";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { LuArrowUpDown } from "react-icons/lu";

export default function OrderTable({ data, setdateOrder }) {
  const [viewDetails, setViewDetails] = useState(false);
  const [viewRowId, setViewRowId] = useState(0);
  const handelViewOrder = (id) => {
    setViewDetails((prev) => !prev);
    setViewRowId(id);
    console.log(id);
  };
  const handelCancelOrder = async (id) => {
    const response = await OrderService.cancelOrder(id);

    console.log(response);
    console.log(id);
  };

  const handelAmountSort = () => {
    console.log("Total Sort Clicked");
  };

  const handelOrderChange = () => {
    console.log("Changing order for the order date");
    setdateOrder((Prev) => {
      if (Prev === "DESC") {
        return "ASC";
      }
      return "DESC";
    });
  };

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-50 dark:bg-black/40 border-b border-gray-200">
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
            Order Id
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-center">
            Customer Name
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-center">
            <button
              className="flex flex-row items-center gap-1 cursor-pointer"
              onClick={handelOrderChange}
            >
              Order Date
              <LuArrowUpDown />{" "}
            </button>
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-center">
            Status
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-right">
            <button onClick={handelAmountSort}>Total Amount</button>
          </th>
          <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-right">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white dark:bg-black/40">
        {data.length > 0 ? (
          data.map((d) => (
            <>
              <tr
                key={d.order_id}
                className="hover:bg-blue-50/50 transition-colors group"
              >
                <td className="px-6 py-4 text-sm font-semibold text-app-text">
                  {d.order_id}
                </td>
                <td className="px-6 py-4 text-sm text-center">
                  {d.customer_name}
                </td>
                <td className="px-6 py-4 text-sm text-app-text text-left">
                  {formatDate(d.order_date)}
                </td>
                <td className="px-6 py-4 text-sm text-app-text text-center ">
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
                      .map((i) => i.quantity * i.price)
                      .reduce((a, b) => a + b, 0),
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-app-text">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row-reverse gap-3">
                      {d.status === "PLACED" && (
                        <button
                          onClick={() => handelCancelOrder(d.order_id)}
                          className="bg-red-100 hover:bg-red-200 duration-300 text-red-600 font-semibold px-3 py-1 rounded-lg flex flex-row items-center gap-1"
                        >
                          Cancel Order
                          <span>
                            <GiCancel />
                          </span>
                        </button>
                      )}
                      <button
                        onClick={() => handelViewOrder(d.order_id)}
                        className=" bg-blue-100 hover:bg-blue-200 duration-300 text-blue-700 font-semibold px-3 py-1 rounded-lg flex flex-row items-center gap-1"
                      >
                        View Details
                        <span>
                          {viewDetails && viewRowId === d.order_id ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={6}>
                  {viewDetails && viewRowId === d.order_id && (
                    <div className="w-full ">
                      <ViewDetails d={d} />
                    </div>
                  )}
                </td>
              </tr>
            </>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="px-6 py-12 text-center text-app-text">
              <p className="text-lg">No matching Orders found</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
