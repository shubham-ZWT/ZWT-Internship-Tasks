import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import employeeService from "../services/employeeService";
import toast from "react-hot-toast";

export const employeeKeys = {
  all: ["employees"],
  lists: () => [...employeeKeys.all, "list"],
  list: (filters) => [...employeeKeys.lists(), filters],
  details: () => [...employeeKeys.all, "detail"],
  detail: (id) => [...employeeKeys.details(), id],
};

export const useEmployees = (filters) => {
  return useQuery({
    queryKey: employeeKeys.list(filters),
    queryFn: () => employeeService.getAllEmployees(filters),
  });
};

export const useEmployeeDetails = (id) => {
  return useQuery({
    queryKey: employeeKeys.detail(id),
    queryFn: () => employeeService.getEmployeeById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => employeeService.createEmployee(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.lists() });
      toast.success("Employee Added successfully");
    },
    onSettled: () => {
      console.log("Create mutation finished");
    },
    onError: (error) => {
      console.error("Mutation Error:", error);
      toast.error(error.response?.data?.error || "Failed to create employee");
    },
  });
};

export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => {
      return employeeService.updateEmployee(data.id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.all });
      toast.success("Employee updated successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "Update failed");
    },
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => employeeService.deleteEmployee(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.lists() });
      toast.success("Employee deleted successfully");
    },
    onSettled: () => {
      console.log("Delete mutation finished");
    },
    onError: (error) => {
      console.error("Mutation Error:", error);
      toast.error(error.response?.data?.error || "Failed to delete employee");
    },
  });
};
