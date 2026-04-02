import type { Task, CreateTaskDTO, UpdateTaskDTO } from "@/types/task.types.js";
import { AppError } from "@/utils/appError.js";

export class TaskService {
  private static tasks = new Map<string, Task>();

  static getAll(): Task[] {
    return Array.from(this.tasks.values());
  }

  static getById(id: string): Task {
    const task = this.tasks.get(id);

    if (!task) {
      throw new AppError(`Task with ID ${id} not found`, 404);
    }

    return task;
  }

  static create(data: CreateTaskDTO): Task {
    const id = crypto.randomUUID();
    const newTask: Task = {
      id,
      ...data,
      completed: false,
      createdAt: new Date(),
    };

    this.tasks.set(id, newTask);
    return newTask;
  }

  static update(id: string, data: UpdateTaskDTO) {
    const existing = this.tasks.get(id);

    if (!existing) throw new Error("Task not Found");

    const updatedTask = { ...existing, ...data };
    this.tasks.set(id, updatedTask);
    return updatedTask;
  }

  static delete(id: string) {
    return this.tasks.delete(id);
  }
}
