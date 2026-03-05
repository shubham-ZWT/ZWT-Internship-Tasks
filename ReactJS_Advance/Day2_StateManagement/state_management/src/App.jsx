import "./App.css";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Login />
      <Dashboard />

      {/* Immer Remaining  */}

      {/* React Tanstack queries */}
      <EmployeeList />
    </>
  );
}

export default App;
