import { useMutation, useQueryClient } from "@tanstack/react-query";
import { employeeKeys } from "../queries/employeeQueries";
import employeeService from "../services/employeeService";

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => employeeService.createEmployee(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: employeeKeys.all,
      });
    },

    onError: (error) => {
      console.error("Mutation failed:", error.message);
      alert(`Failed to add employee: ${error.message}`);
    },
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => employeeService.deleteEmployee(id),

    // Step 1: Instant UI Update
    onMutate: async (id) => {
      // Cancel any outgoing refetches so they don't overwrite our optimistic state
      await queryClient.cancelQueries({ queryKey: employeeKeys.lists() });

      // Snapshot the previous value
      const previousEmployees = queryClient.getQueryData(employeeKeys.lists());

      // Optimistically remove the employee from the cache
      queryClient.setQueryData(employeeKeys.lists(), (old) => {
        return old ? old.filter((emp) => emp.id !== id) : [];
      });

      // Return context with snapshot for rollback
      return { previousEmployees };
    },

    // Step 2: Rollback on Failure
    onError: (err, id, context) => {
      if (context?.previousEmployees) {
        queryClient.setQueryData(
          employeeKeys.lists(),
          context.previousEmployees,
        );
      }
      alert(`Delete failed: ${err.message}`);
    },

    // Step 3: Always Refetch to stay in sync
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.lists() });
    },
  });
};
