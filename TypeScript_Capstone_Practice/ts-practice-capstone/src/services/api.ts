import axios from "axios";

//Interface of authStorage
interface AuthStorage {
  state: {
    token: string | null;
  };
  version: number;
}

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Request interceptors
api.interceptors.request.use(
  (config) => {
    const rawData = localStorage.getItem("auth-storage");

    if (rawData) {
      try {
        const authData = JSON.parse(rawData) as AuthStorage;
        const token = authData.state.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error(error);
      }
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

//Response Interceptors
api.interceptors.response.use(
  (response) => {
    console.log(response);

    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - redirecting to login");
    }
    return Promise.reject(error);
  },
);

export default api;
