import apiClient from "../api/apiClient";

const EMPLOYEE_BASE = "/api/employees";

export const employeeService = {
  getAllEmployees: async (filters) => {
    const response = await apiClient.get(EMPLOYEE_BASE, { params: filters });
    return response.data;
  },

  getEmployeeById: async (id) => {
    const response = await apiClient.get(`${EMPLOYEE_BASE}/${id}`);
    return response.data;
  },

  createEmployee: async (data) => {
    const response = await apiClient.post(EMPLOYEE_BASE, data);
    return response.data;
  },
};

export default employeeService;
