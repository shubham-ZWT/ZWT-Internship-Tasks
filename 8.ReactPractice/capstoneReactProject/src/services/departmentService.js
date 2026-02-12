import apiClient from "./api";

const DEPARTMENT_BASE = "/departments";
console.log("requestiong", DEPARTMENT_BASE);

export const departmentService = {
  getAllDepartments: () => apiClient.get(DEPARTMENT_BASE),

  addDepartments: (data) => apiClient.post(DEPARTMENT_BASE, data),

  getAllEmployessOfDepartment: (id) =>
    apiClient.get(`${DEPARTMENT_BASE}/${id}`),
};

export default departmentService;
