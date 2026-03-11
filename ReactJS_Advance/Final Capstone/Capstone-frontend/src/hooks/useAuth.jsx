import { useRef, useState, useEffect } from "react";
import authService from "../services/authService";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const tokensRef = useRef(null);

  useEffect(() => {
    const loadTokens = () => {
      const storedToken = localStorage.getItem("auth_token");
      const storedEmail = localStorage.getItem("email");
      console.log(storedEmail, storedToken);

      if (storedToken && storedEmail) {
        try {
          const token = JSON.parse(storedToken);
          const email = JSON.parse(storedEmail);

          tokensRef.current = token;
          setUser({ email });
        } catch (e) {
          logout();
        }
      }
      setLoading(false);
    };
    loadTokens();
  }, []);

  const login = async (credentials) => {
    const data = await authService.login(credentials);

    localStorage.setItem("auth_token", JSON.stringify(data.token));
    localStorage.setItem("email", JSON.stringify(data.email));

    tokensRef.current = data.token;
    setUser({ email: data.email });

    return data;
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("email");
    tokensRef.current = null;
    setUser(null);
  };

  return { user, login, logout, loading, token: tokensRef.current };
}
