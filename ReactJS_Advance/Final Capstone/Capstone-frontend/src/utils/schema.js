import * as z from "zod";

export const employeeSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  salary: z.coerce
    .number()
    .min(1000, "Salary must be at least 1,000")
    .max(100000, "Salary cannot exceed 1,00,000"),
  dept_id: z.string().min(1, "Please select a department"),
});
