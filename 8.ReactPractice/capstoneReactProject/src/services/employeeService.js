import apiClient from "./api";

const EMPLOYEE_BASE = "/employees";

export const employeeService = {
  getAllEmployees: () => apiClient.get(EMPLOYEE_BASE),

  getEmployeeById: (id) => apiClient.get(`${EMPLOYEE_BASE}/${id}`),

  createEmployee: (data) => apiClient.post(EMPLOYEE_BASE, data),

  updateEmployee: (id, data) => apiClient.put(`${EMPLOYEE_BASE}/${id}`, data),

  deleteEmployee: (id) => apiClient.delete(`${EMPLOYEE_BASE}/${id}`),

  downloadCsv: ()=>apiClient.get(`${EMPLOYEE_BASE}/download`)
};

export default employeeService;
