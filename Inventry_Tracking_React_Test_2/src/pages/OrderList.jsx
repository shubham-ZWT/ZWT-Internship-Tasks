import React, { useState, useMemo } from "react";
import useOrders from "../hooks/useOrders";
import { IoMdRefreshCircle } from "react-icons/io";

import useDebounce from "../hooks/useDebounce";
import OrderTable from "../components/orders/OrderTable";
import SearchFilter from "../components/orders/SearchFilter";
import Loading from "../components/common/Loading";

export default function OrderList() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 1000);
  const [sortKey, setSortKey] = useState("all");
  const [dateOrder, setdateOrder] = useState("DESC");
  console.log(dateOrder);

  const filters = useMemo(
    () => ({
      search: debouncedSearch || undefined,
      status: sortKey === "all" ? undefined : sortKey,
      sort: "orders.order_date",
      order: dateOrder,
    }),
    [debouncedSearch, sortKey, dateOrder],
  );

  const { data, isloading, reFetch, error } = useOrders(filters);

  if (isloading) {
    return <Loading />;
  } else if (error) {
    return <h1>Error Fetching Data</h1>;
  } else {
    return (
      <div className="w-full top-0 left-0 right-0 bottom-0 p-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Order List</h1>

          <div>
            <SearchFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setSortKey={setSortKey}
              reFetch={reFetch}
            />

            <div className="flex flex-col gap-3">
              <OrderTable data={data} setdateOrder={setdateOrder} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
