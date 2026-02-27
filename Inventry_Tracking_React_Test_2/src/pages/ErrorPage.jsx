import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row max-w-7xl mx-auto h-screen">
      <div className=" flex flex-col gap-2 items-center justify-center w-full h-1/2">
        <h1 className="font-bold text-6xl">404</h1>
        <h1 className="font-bold text-4xl">Page Not Found</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
          className=" bg-blue-100 text-blue-800 px-3 py-1 font-semibold rounded-lg"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
