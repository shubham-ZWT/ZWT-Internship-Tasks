import apiClient from "./api";

export const authService = {
  login: (credentials) => apiClient.post("/auth/login", credentials),
};

export default authService;
