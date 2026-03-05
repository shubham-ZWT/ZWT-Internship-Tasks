import React from "react";
import withAuth from "./withAuth";
import withLoading from "./withLoading";
import { useToast } from "../hooks/useToast";

const Dashboard = () => {
  const { addToast } = useToast();

  const handelSuccess = () => {
    addToast("User Saved Successfully", "success");
  };
  const handelError = () => {
    addToast("Error", "error");
  };
  const handelWarning = () => {
    addToast("Warning", "warning");
  };
  const handelInfo = () => {
    addToast("info tho hai", "info");
  };

  return (
    <>
      <div>You are on Dashboar</div>
      <button className="border border-gray-400" onClick={handelSuccess}>
        Success
      </button>
      <button className="border border-gray-400" onClick={handelError}>
        Error
      </button>
      <button className="border border-gray-400" onClick={handelWarning}>
        Warning
      </button>
      <button className="border border-gray-400" onClick={handelInfo}>
        Info
      </button>
    </>
  );
};

const AuthDashboard = withAuth(withLoading(Dashboard));

export default AuthDashboard;
