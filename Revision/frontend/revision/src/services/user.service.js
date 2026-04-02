import apiClient from "./api.Client";

const HR_BASE_URL = "/hr";

const userService = {
  getHrDashboardData: async (q, page) => {
    const response = await apiClient.get(HR_BASE_URL, {
      params: {
        q: q || undefined,
        page: page,
        limit: 2,
      },
    });
    return response;
  },

  updateUser: async (userData) => {
    const response = await apiClient.post(
      `${HR_BASE_URL}/${userData.id}`,
      userData,
    );
    return response;
  },
};

export default userService;
