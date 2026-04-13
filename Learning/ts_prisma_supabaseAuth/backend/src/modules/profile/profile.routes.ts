import { Router } from "express";
import {
  getProfileController,
  getAllProfilesController,
  updateProfileController,
  deleteProfileController,
} from "./profile.controller";

const router = Router();

router.get("/:userId", getProfileController);
router.get("/", getAllProfilesController);
router.put("/:userId", updateProfileController);
router.delete("/:userId", deleteProfileController);

export default router;