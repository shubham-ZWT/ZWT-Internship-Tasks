import { Toaster } from "react-hot-toast";
import "./App.css";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
    </>
  );
}

export default App;
