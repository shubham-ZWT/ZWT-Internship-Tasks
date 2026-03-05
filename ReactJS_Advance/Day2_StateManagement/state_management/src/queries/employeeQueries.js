import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import employeeService from "../services/employeeService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const employeeKeys = {
  all: ["employees"],
  lists: () => [...employeeKeys.all, "list"],
  list: (filters) => [...employeeKeys.lists(), filters],
  details: () => [...employeeKeys.all, "detail"],
  detail: (id) => [...employeeKeys.details(), id],
};

// Hook for fetching the list
export const useEmployees = (filters) => {
  return useQuery({
    queryKey: employeeKeys.list(filters),
    queryFn: () => employeeService.getAllEmployees(filters),
    // data is only fetched if filters exist or as needed
  });
};

// Hook for a single employee
export const useEmployee = (id) => {
  return useQuery({
    queryKey: employeeKeys.detail(id),
    queryFn: () => employeeService.getEmployeeById(id),
    enabled: !!id, // Only run if ID is provided
  });
};

//this is for the infinite feed scroll
export const useEmployeeFeed = () => {
  return useInfiniteQuery({
    queryKey: ["employees", "feed"],
    queryFn: ({ pageParam = 1 }) => employeeService.getEmployees(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // If your API returns { data: [...], next: 2 }
      return lastPage.next ?? undefined;
    },
  });
};

// export const useUpdateEmployee = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: ({ id, data }) => employeeService.updateEmployee(id, data),

//     // Step 1: When the user clicks "Save"
//     onMutate: async (updatedEmp) => {
//       // Stop any active refetches (so they don't overwrite our optimistic update)
//       await queryClient.cancelQueries({ queryKey: employeeKeys.all });

//       // Snapshot the current data (the "Undo" button)
//       const previousEmployees = queryClient.getQueryData(employeeKeys.lists());

//       // Optimistically update the cache
//       queryClient.setQueryData(employeeKeys.lists(), (old) =>
//         produce(old, (draft) => {
//           const index = draft.findIndex((e) => e.id === updatedEmp.id);
//           if (index !== -1)
//             draft[index] = { ...draft[index], ...updatedEmp.data };
//         }),
//       );

//       // Return the snapshot so onError can use it
//       return { previousEmployees };
//     },

//     // Step 2: If the server says "No/Error"
//     onError: (err, newTodo, context) => {
//       queryClient.setQueryData(employeeKeys.lists(), context.previousEmployees);
//       toast.error("Update failed! Rolling back changes.");
//     },

//     // Step 3: Always sync with the server at the end
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: employeeKeys.lists() });
//     },
//   });
// };
