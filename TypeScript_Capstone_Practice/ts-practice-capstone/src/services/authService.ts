import api from "./api";

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

const AUTH_BASE = "/auth/login";

const authService = {
  login: (credentials: LoginCredentials) => {
    return api.post<LoginResponse>(AUTH_BASE, credentials);
  },
};

export default authService;
