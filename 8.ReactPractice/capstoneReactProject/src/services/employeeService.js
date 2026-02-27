import apiClient from "./api";

const EMPLOYEE_BASE = "/employees";

export const employeeService = {
  getAllEmployees: () => apiClient.get(EMPLOYEE_BASE),

  getEmployeeById: (id) => apiClient.get(`${EMPLOYEE_BASE}/${id}`),

  createEmployee: (data) => apiClient.post(EMPLOYEE_BASE, data),

  updateEmployee: (id, data) => apiClient.put(`${EMPLOYEE_BASE}/${id}`, data),

  deleteEmployee: (id) => apiClient.delete(`${EMPLOYEE_BASE}/${id}`),

  // Add responseType: 'blob' to handle binary/file data
  downloadCsv: () =>
    apiClient.get(`${EMPLOYEE_BASE}/download`, {
      responseType: "blob",
      timeout: 30000, // Increase to 30 seconds just for this call
    }),
};

export default employeeService;
