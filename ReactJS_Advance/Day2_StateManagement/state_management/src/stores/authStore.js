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
          console.log(credentials);
          set({ isLoading: true, error: null });
          try {
            const response = await authService.login(credentials);
            console.log("Store ka", response);

            set({
              user: response.data,
              token: response.token,
              isAuthenticated: true,
              isLoading: false,
            });
          } catch (error) {
            console.error(error);
            set({ error: "Invalid Credentials", isLoading: false });
          }
        },

        logout: () => {
          set({ user: null, token: null, isAuthenticated: false, error: null });
          localStorage.removeItem("auth-storage");
        },
      }),
      {
        name: "auth-storage",
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
