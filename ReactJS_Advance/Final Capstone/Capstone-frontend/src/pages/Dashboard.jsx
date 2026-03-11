import React, { useEffect } from "react"; // Added useEffect
import useAuthStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import { useDashboardStats } from "../queries/dashboardQueries";
import StatCard from "../components/StatCard";
import { FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BsCollectionFill } from "react-icons/bs";

export default function Dashboard() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  console.log(isAuthenticated);
  const navigate = useNavigate();
  const junkActivities = [
    {
      first_name: "Sarah",
      last_name: "Connor",
      action: "Updated department",
      details: "Engineering",
      timestamp: "2026-03-10T14:30:00Z",
    },
    {
      first_name: "James",
      last_name: "Howlett",
      action: "Added new employee",
      details: "Logan (Design)",
      timestamp: "2026-03-10T12:15:00Z",
    },
    {
      first_name: "Ellen",
      last_name: "Ripley",
      action: "Changed salary",
      details: "+$5,000 (Promotion)",
      timestamp: "2026-03-09T09:45:00Z",
    },
    {
      first_name: "Bruce",
      last_name: "Wayne",
      action: "Deleted record",
      details: "Internal Audit #402",
      timestamp: "2026-03-09T18:20:00Z",
    },
    {
      first_name: "Diana",
      last_name: "Prince",
      action: "Updated contact info",
      details: "Email: diana@themyscira.com",
      timestamp: "2026-03-08T11:05:00Z",
    },
  ];

  const { data, isLoading, isError, error, refetch } = useDashboardStats({
    enabled: isAuthenticated,
  });
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("UnAuthenticated, redirecting...");
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  console.log("data from useEmp", data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
        <span className="ml-3">Fetching Employee Data...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
        <p className="font-bold">Error loading employees:</p>
        <p>{error?.message || "Something went wrong"}</p>
        <button
          onClick={() => refetch()}
          className="mt-2 bg-red-100 px-3 py-1 rounded text-sm hover:bg-red-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="pt-5 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
        <div className="flex flex-row gap-4 mt-4">
          <StatCard
            icon={<FaUsers className="text-blue-800" />}
            title={"Total Employees"}
            value={data?.kpis.totalEmployees || 0}
            color={"bg-blue-200"}
          />
          <StatCard
            icon={<FaMoneyCheckDollar className="text-green-800" />}
            title={"Average Salary"}
            value={data?.kpis.avgSalary || 0}
            color={"bg-green-200"}
          />
          <StatCard
            icon={<BsCollectionFill className="text-red-800" />}
            title={"Total Departments"}
            value={data?.kpis.deptCount || 0}
            color={"bg-red-200"}
          />
          {/* Recent Activities */}
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Recent 5 Activity</h2>
          <div className="flex flex-col gap-4">
            {junkActivities.map((item, index) => (
              <div key={index} className="flex gap-4 relative">
                {index !== junkActivities.length - 1 && (
                  <div className="absolute left-[11px] top-7 w-[2px] h-full bg-gray-100" />
                )}

                <div className="h-6 w-6 rounded-full bg-purple-200 border-4 border-white shadow-sm shrink-0 z-10" />

                <div className="flex flex-col">
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">
                      {item.first_name} {item.last_name}
                    </span>{" "}
                    {item.action}
                  </p>
                  <p className="text-xs text-purple-600 font-medium">
                    {item.details}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase">
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            {/* {data.recentActivity.map((activity) => (
              <p className="bg-white shadow-sm py-3 px-3">
                {activity.first_name} {activity.last_name}
              </p>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
