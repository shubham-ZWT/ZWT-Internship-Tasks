export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export type CreateTaskDTO = Omit<Task, "id">; // Omit for using - Give me tasks but remove id
export type UpdateTaskDTO = Omit<Task, "id">;
