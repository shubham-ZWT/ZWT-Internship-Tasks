import apiClient from "./api";

const EMPLOYEE_BASE = "/employees";

export const employeeService = {
  getAllEmployees: () => apiClient.get(EMPLOYEE_BASE),
  updateEmployee: (id, data) => apiClient.put(`${EMPLOYEE_BASE}/${id}`, data),
};

export default employeeService;
