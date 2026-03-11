import apiClient from "./api";

const EMPLOYEE_BASE = "/employees";

export const employeeService = {
  getAllEmployees: async ({ pageParam = 1, queryKey }) => {
    const filters = queryKey && queryKey[2] ? queryKey[2] : {};
    const response = await apiClient.get(EMPLOYEE_BASE, {
      params: {
        ...filters,
        page: pageParam,
        limit: 10,
      },
    });
    return response;
  },

  getEmployeeById: async (id) => {
    const response = await apiClient.get(`${EMPLOYEE_BASE}/${id}`);
    return response;
  },

  createEmployee: async (data) => {
    const response = await apiClient.post(EMPLOYEE_BASE, data);
    return response;
  },

  updateEmployee: async (id, updateData) => {
    const response = await apiClient.put(`${EMPLOYEE_BASE}/${id}`, updateData);
    return response;
  },

  deleteEmployee: async (id) => {
    const response = await apiClient.delete(`${EMPLOYEE_BASE}/${id}`);
    return response;
  },
};

export default employeeService;
