import api from "./api";

const AUTH_BASE = "/auth/login";

const authService = {
  login: (credentials) => api.post(AUTH_BASE, credentials),
};

export default authService;
