import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import authService from "../services/authService";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("user") !== null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");


    if (storedUser) {
      setUser(JSON.parse(storedUser));
     
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (credentials) => {
    setLoading(true);

    try {
      const response = await authService.login(credentials);
      if (response.success) {
        console.log("Login ", response.data[0].email);
      } else {
        console.log("not login success");
      }

      setUser(response.data[0].email);
      setIsAuthenticated(true);

      localStorage.setItem("user", JSON.stringify(response.data[0].email));
   
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  
    setIsAuthenticated(false);

    localStorage.removeItem("user");
    
  };

  return (
    <AuthContext.Provider
      value={{
        user,
  
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
