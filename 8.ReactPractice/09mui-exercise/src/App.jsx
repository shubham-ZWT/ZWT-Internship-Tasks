import "./App.css";
import { Button } from "@mui/material";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <>
      <Button variant="contained" color="primary">
        Add Employee
      </Button>

      <EmployeeTable />
    </>
  );
}

export default App;
