import React from "react";
import useOrders from "../hooks/useOrders";
import StatsCard from "../components/dashboard/StatsCard";
import OrdersTable from "../components/dashboard/OrdersTable";
import { IoMdRefreshCircle } from "react-icons/io";
import { MdDensitySmall } from "react-icons/md";
import { IoCheckmarkOutline, IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import Loading from "../components/common/Loading";

export default function Dashboard() {
  const { data, isloading, reFetch, error } = useOrders();
  const totalOrders = data.length;
  const plancedOrders = data.filter(
    (order) => order.status.toLowerCase() === "placed",
  );
  const completedOrders = data.filter(
    (order) => order.status.toLowerCase() === "completed",
  );
  const cancelledOrders = data.filter(
    (order) => order.status.toLowerCase() === "cancelled",
  );

  if (isloading) {
    return <Loading />;
  } else if (error) {
    return <h1>Error Fetching Data</h1>;
  } else {
    return (
      <div className="w-full top-0 left-0 right-0 bottom-0 p-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex flex-row gap-3">
            <StatsCard
              name={"Total Orders"}
              quantity={totalOrders}
              icon={<MdDensitySmall />}
              iconColor={"text-blue-600"}
            />
            <StatsCard
              name={"Placed Orders"}
              quantity={plancedOrders.length}
              icon={<IoCheckmarkOutline />}
              iconColor={"text-yellow-600"}
            />
            <StatsCard
              name={"Completed Orders"}
              quantity={completedOrders.length}
              icon={<IoCheckmarkDoneCircle />}
              iconColor={"text-green-700"}
            />
            <StatsCard
              name={"Cancelled Orders"}
              quantity={cancelledOrders.length}
              icon={<MdCancel />}
              iconColor={"text-red-500"}
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <button
              className="bg-blue-200 text-blue-700 font-medium px-3 py-2 rounded-lg w-fit flex items-center gap-2"
              onClick={() => reFetch()}
            >
              Refresh
              <span className="text-xl">
                <IoMdRefreshCircle />
              </span>
            </button>
            <OrdersTable data={data.slice(0, 5)} />
          </div>
        </div>
      </div>
    );
  }
}
