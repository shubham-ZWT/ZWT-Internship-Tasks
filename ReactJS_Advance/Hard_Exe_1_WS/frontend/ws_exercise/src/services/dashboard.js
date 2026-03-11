import apiClient from "./api";

const DASHBOARD_BASE = "/dashboard";

export const dashboardService = {
  getDashboardData: () => apiClient.get(DASHBOARD_BASE),

  getDepartmentDashboardData: () =>
    apiClient.get(`${DASHBOARD_BASE}/departments`),
  getEmployeeDashboardData: () => apiClient.get(`${DASHBOARD_BASE}/employees`),
};

export default dashboardService;
