import apiClient from "./api";

export const WarehouseService = {
  getAllWarehouses: () => apiClient.get("/warehouses"),
  getWarehouseProducts: (id) => apiClient.get(`/warehouses/${id}/stock`),
};
