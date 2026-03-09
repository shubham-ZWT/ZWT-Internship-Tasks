import React from "react";
import useAuthStore from "../stores/authStore";

export default function Dashboard() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return (
      <div>
        <p>Please Login for the Dashboard Access</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard Accessed</h1>
      <button
        onClick={() => logout()}
        className="border bg-gray-800 text-white px-3 py-1 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
