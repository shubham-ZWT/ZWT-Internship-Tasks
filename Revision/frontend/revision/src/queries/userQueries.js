import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import userService from "../services/user.service";

const useUsers = (q, page) => {
  return useQuery({
    queryKey: ["users", { q, page }],
    queryFn: () => userService.getHrDashboardData(q, page),

    staleTime: 1000 * 60 * 5,
  });
};

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData) => userService.updateUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

export { useUsers, useUpdateUser };
