import "./App.css";
import Card from "./components/Card";
import useTheme from "./hooks/useTheme";
function App() {
  const { theme, changeTheme } = useTheme();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => changeTheme("default")}
            className={`px-4 py-2 rounded-sm shadow-sm border 
          ${theme === "default" ? "bg-text text-bg  transition duration-300" : "bg-bg text-text"}`}
          >
            Default
          </button>

          <button
            onClick={() => changeTheme("organic")}
            className={`px-4 py-2 rounded-sm shadow-sm border 
          ${theme === "organic" ? "bg-text text-bg transition duration-300" : "bg-bg text-text"}`}
          >
            Organic
          </button>
          <button
            onClick={() => changeTheme("sharp")}
            className={`px-4 py-2 rounded-sm shadow-sm border 
          ${theme === "sharp" ? "bg-text text-bg transition duration-300" : "bg-bg text-text"}`}
          >
            sharp
          </button>
        </div>
        <Card />
      </div>
    </>
  );
}

export default App;
