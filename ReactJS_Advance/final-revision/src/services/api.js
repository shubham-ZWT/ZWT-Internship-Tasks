import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

//Request Inceptor
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    //since we are usign the zustand persist
    const authData = JSON.parse(localStorage.getItem("auth-storage"));
    const token = authData?.state?.token;
    console.log("From Req Inc", config.url, config.method);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

//Response Interceptor
api.interceptors.response.use(
  (response) => {
    console.log("From Res Inc Response received:", response.data);

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
