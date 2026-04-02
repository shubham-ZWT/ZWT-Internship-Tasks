import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "@/controllers/task.controller.js";
import { Router } from "express";
import { catchAsync } from "@/utils/catchAsync.js";

const router: Router = Router();

router.get("/", catchAsync(getTasks));
router.get("/:id", catchAsync(getTaskById));
router.post("/", catchAsync(createTask));
router.put("/:id", catchAsync(updateTask));
router.delete("/:id", catchAsync(deleteTask));

export default router;
