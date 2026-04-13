import { Router } from "express";
import {
  createBatchController,
  getBatchController,
  getBatchesByCollegeController,
  getBatchStudentsController,
  updateBatchController,
  deleteBatchController,
} from "./batch.controller";

const router = Router();

router.post("/", createBatchController);
router.get("/", getBatchesByCollegeController);
router.get("/:id", getBatchController);
router.get("/:id/students", getBatchStudentsController);
router.put("/:id", updateBatchController);
router.delete("/:id", deleteBatchController);

export default router;