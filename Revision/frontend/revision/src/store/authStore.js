import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import authService from "../services/auth.Service";

const useAuth = create(
  devtools(
    persist(
      (set) => ({
        isAuth: false,
        isLoading: false,
        error: null,
        token: null,

        hasHydrated: false,
        setHasHydrated: (state) => set({ hasHydrated: state }),

        login: async (credentials) => {
          const response = await authService.login(credentials);
          if (response.success) {
            set({ isAuth: true, error: null, token: response.token });
          } else {
            set({ isAuth: false, error: response.error, token: null });
          }
        },

        register: async (credentials) => {
          const response = await authService.register(credentials);
          if (response.success) {
            set({ isAuth: true, error: null, token: response.token });
          } else {
            set({ isAuth: false, error: response.error, token: null });
          }
        },

        logout: () => {
          set({ isAuth: false, isLoading: false, token: null });
        },
      }),
      {
        name: "auth-storage",
        onRehydrateStorage: () => (state) => {
          state.setHasHydrated(true);
        },
      },
    ),
  ),
);

export default useAuth;
