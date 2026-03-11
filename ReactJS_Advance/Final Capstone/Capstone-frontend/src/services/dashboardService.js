import apiClient from "./api";

export const dashboardService = {
  getDashboardStats: async () => {
    const response = await apiClient.get("/dashboard");
    return response;
  },

  getSalaryReports: async (sortOrder) => {
    const response = await apiClient.get(
      `/dashboard/reports?sort=${sortOrder}`,
    );
    return response;
  },
};

export default dashboardService;
