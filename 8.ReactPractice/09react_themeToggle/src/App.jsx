import "./App.css";
// import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import AppLayout from "./layouts/AppLayout";
import AppRoutes from "./routes/AppRoutes";
function App() {
  // const [theme, setTheme] = useState("light");

  // Load theme on first render
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme") || "light";
  //   setTheme(savedTheme);

  //   const root = document.getElementById("root");
  //   root.classList.remove("light", "dark");
  //   root.classList.add(savedTheme);
  // }, []);

  // Toggle theme
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";

  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);

  //   const root = document.getElementById("root");
  //   root.classList.remove("light", "dark");
  //   root.classList.add(newTheme);
  // };

  return (
    <>
      <AppRoutes />
    </>
    //   <div className="min-h-screen bg- flex flex-col items-center justify-center bg-gray-100/90 dark:bg-black/90 gap-4">
    //     {/* <h1 className="text-black dark:text-white text-3xl mb-4">Hello</h1>
    //      */}

    //     <button
    //       onClick={toggleTheme}
    //       className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
    //     >
    //       Switch to {theme === "light" ? "Dark" : "Light"} Mode
    //     </button>

    //     <div className="w-xs flex flex-col gap-3 border-2 border-solid rounded-lg p-4 dark:bg-gray-800 dark:border-white hover:-translate-y-2 transition-all duration-300">
    //       <div>
    //         <h2 className="font-bold text-3xl dark:text-gray-100/90">
    //           Demo Card
    //         </h2>
    //       </div>
    //       <div>
    //         <p className="text-justify dark:text-gray-100/90">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
    //           tenetur corrupti in exercitationem natus dolor itaque dolore
    //           provident dignissimos facere! Quisquam quo eum necessitatibus quia
    //           numquam, id architecto. Iure, accusamus.
    //         </p>
    //       </div>
    //       <button
    //         className="
    //   group
    //   flex items-center gap-3
    //   border-none p-2 rounded-xl
    //   bg-[#4e31aa] text-gray-100
    //   dark:border dark:border-white
    //   w-1/2
    // "
    //       >
    //         <FaSave
    //           className="transition-transform duration-300
    //     group-hover:translate-x-2"
    //         />

    //         <span
    //           className="
    //     transition-transform duration-300
    //     group-hover:translate-x-2
    //   "
    //         >
    //           Save
    //         </span>
    //       </button>
    //     </div>
    //   </div>
  );
}

export default App;
