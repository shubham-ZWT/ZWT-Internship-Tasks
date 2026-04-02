import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import authService, { type LoginCredentials } from "../services/authService";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  token: string | null;
  error: string | null;
  user: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const useAuth = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isAuth: false,
        isLoading: false,
        token: null,
        error: null,
        user: null,

        login: async (credentials: LoginCredentials) => {
          set({ isLoading: true, error: null });
          try {
            const response = await authService.login(credentials);

            set({
              user: response.email,
              token: response.accessToken,
              isAuth: true,
              isLoading: false,
            });
          } catch (error: any) {
            const errorMsg = error.response?.data?.message || "Login failed";
            set({ error: errorMsg, isLoading: false, isAuth: false });
            throw error;
          }
        },

        logout: () => {
          set({
            user: null,
            token: null,
            isAuth: false,
            error: null,
          });

          localStorage.removeItem("auth-storage");
        },
      }),
      {
        name: "auth-storage",

        partialize: (state) => ({
          isAuth: state.isAuth,
          token: state.token,
          user: state.user,
        }),
      },
    ),
  ),
);

export default useAuth;
