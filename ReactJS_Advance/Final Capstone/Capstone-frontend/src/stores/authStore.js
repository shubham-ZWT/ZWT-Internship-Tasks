import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import authService from "../services/authService";

const useAuthStore = create(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,

        setUser: (user) => set({ user, isAuthenticated: !!user }),

        login: async (credentials) => {
          set({ isLoading: true, error: null });
          try {
            const response = await authService.login(credentials);
            set({
              user: { email: response.email },
              token: response.token,
              isAuthenticated: true,
              isLoading: false,
            });

            return response;
          } catch (error) {
            const errorMsg =
              error.response?.data?.message || "Invalid Credentials";
            set({ error: errorMsg, isLoading: false });
            throw error;
          }
        },

        logout: () => {
          set({ user: null, token: null, isAuthenticated: false, error: null });
          return;
        },
      }),
      {
        name: "auth-storage", // Key in localStorage
      
        partialize: (state) => ({
          token: state.token,
          user: state.user,
          isAuthenticated: state.isAuthenticated,
        }),
      },
    ),
  ),
);

export default useAuthStore;
