import { Request, Response } from "express";
import { TaskService } from "@/services/task.service.js";
import { CreateTaskDTO, UpdateTaskDTO } from "@/types/task.types.js";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = TaskService.getAll();
  res.json(tasks);
};

export const getTaskById = async (req: Request, res: Response) => {
  const id = String(req.params.id);
  const task = TaskService.getById(id);
  res.json(task);
};

export const createTask = async (req: Request, res: Response) => {
  const taskData = req.body;
  const task: CreateTaskDTO = TaskService.create(taskData);
  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const updatedTaskData = req.body;
    const updatedTask: UpdateTaskDTO = TaskService.update(id, updatedTaskData);
    res.json(updatedTask);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const deleted = TaskService.delete(id);
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    res.status(204).json({ message: "Task Deleted" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
