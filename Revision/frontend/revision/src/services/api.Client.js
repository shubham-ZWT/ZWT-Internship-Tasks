import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const authData = JSON.parse(localStorage.getItem("auth-storage"));
    const token = authData.state?.token;
    console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    console.log("Response from api", response);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
