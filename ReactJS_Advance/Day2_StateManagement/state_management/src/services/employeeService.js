import apiClient from "../api/apiClient";

const EMPLOYEE_BASE = "/api/employees";

export const employeeService = {
  // Use destructuring to get the pageParam injected by React Query
  getAllEmployees: async ({ pageParam = 1, queryKey }) => {
    // 🛡️ Safety Check: Ensure queryKey exists and is the array we expect
    // Format: ['employees', 'list', { search: '...' }]
    const filters = queryKey && queryKey[2] ? queryKey[2] : {};

    const response = await apiClient.get(EMPLOYEE_BASE, {
      params: {
        ...filters,
        page: pageParam,
        limit: 10,
      },
    });

    // Axios interceptor returns response.data, which is { employees: [], nextPage: 2 }
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

  deleteEmployee: async (id) => {
    const response = await apiClient.delete(`${EMPLOYEE_BASE}/${id}`);
    return response.data;
  },
};

export default employeeService;
