import apiClient from "./api";

export const OrderService = {
  getAllOrders: (params) => apiClient.get("/orders", { params }),
  cancelOrder: (id) => apiClient.put(`/orders/${id}/cancel`),
  placeOrder: (data) => apiClient.post("/orders", data),
};
