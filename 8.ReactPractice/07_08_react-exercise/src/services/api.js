import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//request Interceptors
apiClient.interceptors.request.use(
  (config) => {
    // Log the request
    console.log("Request:", config.method?.toUpperCase(), config.url);

    // Add authentication token from localStorage if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//response Interceptors
apiClient.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response.data;
  },
  (error) => {
    console.error(error);
    const status = error.response?.status;

    if (status === 401) {
      console.warn("Unauthorized! Redirecting to login...");
      window.location.href("/login");
    } else if (status === 404) {
      console.error("Resource not Found");
    } else if (status === 500) {
      console.error("Server error, Please try again Later");
    } else if (status === 429) {
      console.warn("Too many Request as per Rate Limit");
    }

    return Promise.reject(error);
  },
);

export default apiClient;
