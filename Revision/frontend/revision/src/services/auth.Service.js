import apiClient from "./api.Client";

const authService = {
  login: async (credentials) => {
    const response = await apiClient.post("/auth/login", credentials);
    return response;
  },

  register: async (credentials) => {
    const response = await apiClient.post("/auth/register", credentials);
    return response;
  },
};

export default authService;
