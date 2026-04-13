import { Router } from "express";
import {
  createCollegeController,
  getCollegeController,
  getAllCollegesController,
  updateCollegeController,
  deleteCollegeController,
} from "./college.controller";

const router = Router();

router.post("/", createCollegeController);
router.get("/", getAllCollegesController);
router.get("/:id", getCollegeController);
router.put("/:id", updateCollegeController);
router.delete("/:id", deleteCollegeController);

export default router;