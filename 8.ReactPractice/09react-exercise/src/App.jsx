import "./App.css";
import Card from "./components/card/Card";
import EmployeeCard from "./components/employeeCard/EmployeeCard";
import TEmployeeCard from "./components/TEmployeeCard";
import ThemeToggle from "./components/ThemeToggle";
import { useEffect, useState } from "react";

function App() {
  // const employees = [
  //   { name: "Sanket", department: "web dev", salary: 60000 },
  //   { name: "Yash", department: "DB", salary: 60000 },
  //   { name: "Meet", department: "Editor", salary: 60000 },
  //   { name: "Sahal", department: "AI", salary: 60000 },
  //   { name: "Honey", department: "N8N", salary: 60000 },
  // ];

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {/* <EmployeeCard name={"Sanket Patel"} salary={30000} isActive={true} />
      <EmployeeCard name={"Sanket Patel"} salary={30000} isActive={false} />

      <Card active={true}>
        <h3>Sanket Patel</h3>
        <p>Hello from me</p>
      </Card>
      <br />
      <Card active={false}>
        <h3>Sanket Patel</h3>
        <p>Hello from me</p>
      </Card> */}

      {/* Tailwind from here */}
      {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <div className="bg-black text-white ">
        <p>Sanket</p>
      </div> */}

      {/* <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {employees.map((emp) => (
          <TEmployeeCard employee={emp} />
        ))}
      </div>

      <button
        className="bg-black m-3 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        Add Employee
      </button> */}

      {/* <ThemeToggle /> */}
      <div className="min-h-screen bg-backg dark:bg-gray-900 text-black dark:text-white">
        <div className="p-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded bg-grape/50 text-white dark:bg-yellow-400 dark:text-black"
          >
            Toggle Theme
          </button>
          <h1 className="mt-6 text-2xl font-bold">
            Tailwind Dark Mode Working ✅
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
