import { useQuery } from "@tanstack/react-query";
import dashboardService from "../services/dashboardService";

export const dashboardKeys = {
  all: ["dashboard"],
  stats: () => [...dashboardKeys.all, "stats"],
};

export const salaryReport = {
  all: ["salaryReport"],
  stats: () => [...salaryReport.all, "stats"],
};

export const useDashboardStats = (options = {}) => {
  return useQuery({
    queryKey: dashboardKeys.stats(),
    queryFn: () => dashboardService.getDashboardStats(),
    ...options,

    staleTime: 1000 * 60,

    refetchOnWindowFocus: true,
  });
};

export const useSalaryReport = (sortOrder) => {
  return useQuery({
    queryKey: [...salaryReport.stats(), sortOrder],
    queryFn: () => dashboardService.getSalaryReports(sortOrder),
    staleTime: 1000 * 60,

    refetchOnWindowFocus: true,
  });
};
