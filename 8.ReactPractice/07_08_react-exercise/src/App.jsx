import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import HookForm from "./components/HookForm";
import EmployeeListUseEmployees from "./components/EmployeeListUseEmployees";

function App() {
  return (
    <>
      {/* <h1>Using formik</h1>
      <EmployeeForm />

      <h1>Using React form hook</h1>
      <HookForm /> */}

      {/* <h1>Custom Fetch Hook</h1>
      <EmployeeList /> */}

      <h1>Custom Employees hook and react Query for CRUD</h1>
      <EmployeeListUseEmployees />
    </>
  );
}

export default App;
