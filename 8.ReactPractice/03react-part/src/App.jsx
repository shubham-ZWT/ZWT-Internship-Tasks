import "./App.css";
import Timer from "./components/Timer";
import Notification from "./components/Notification";
import WindowResize from "./components/WindowResize";
import RandomUserApi from "./components/RandomUserApi";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeManagement from "./components/EmployeeManagement";

function App() {
  return (
    <>
      {/* timer  */}
      {/* <Timer /> */}

      {/* Document Title Sync */}
      {/* <Notification /> */}

      {/* Window Resize */}
      {/* <WindowResize /> */}

      {/* Random user DAdta */}
      <RandomUserApi />

      {/* Emplloyee List using api service and deleting employess*/}
      {/* <EmployeeList /> */}

      {/* Create Employee api */}
      {/* <CreateEmployee /> */}

      {/* Edit Employee */}
      {/* <EditEmployee /> */}

      {/* EmployeeManagement */}
      {/* <EmployeeManagement /> */}
    </>
  );
}

export default App;
