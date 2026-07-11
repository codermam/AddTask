import express from "express";
import {
  signup,
  login,
  getCurrentUser
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/me", authMiddleware, getCurrentUser);

router.post("/login", login);

export default router;