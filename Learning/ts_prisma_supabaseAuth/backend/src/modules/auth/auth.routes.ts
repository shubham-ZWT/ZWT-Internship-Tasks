import { Router } from "express";
import {
  loginController,
  registerTPOController,
  registerStudentController,
  getBatchByInviteController,
} from "./auth.controller";

const router = Router();

router.post("/login", loginController);
router.post("/register/tpo", registerTPOController);
router.post("/register/student", registerStudentController);
router.get("/register/:inviteCode", getBatchByInviteController);

export default router;
