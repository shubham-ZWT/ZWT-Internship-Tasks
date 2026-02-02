import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider.jsx";
import ThemeProvider from "./contexts/ThemeProvider.jsx";
import CartProvider from "./contexts/CartProvider.jsx";
import EmployeeProvider from "./contexts/EmployeeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            <EmployeeProvider>
              <App />
            </EmployeeProvider>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
