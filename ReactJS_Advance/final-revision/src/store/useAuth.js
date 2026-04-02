import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import authService from "../services/authService";

const useAuth = create(
  devtools(
    persist(
      (set) => ({
        isAuth: false,
        token: null,
        user: null,
        isLoading: false,
        error: null,

        login: async (credentials) => {
          set({ isLoading: true, error: null });
          try {
            const response = await authService.login(credentials);
            console.log("res from store", response);

            set({
              user: response.email,
              token: response.accessToken,
              isAuth: true,
              isLoading: false,
            });
            return response;
          } catch (error) {
            const errorMsg = error.response?.data?.message || "Login failed";
            set({ error: errorMsg, isLoading: false, isAuth: false });
            throw error;
          }
        },

        logout: () => {
          (set({
            isAuth: false,
            token: null,
            user: null,
            error: null,
          }),
            localStorage.removeItem("auth-storage"));
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
