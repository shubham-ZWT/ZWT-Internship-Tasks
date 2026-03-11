import apiClient from "./api";

export const authService = {
  login: (data) => apiClient.post("/login", data),
};

export default authService;
