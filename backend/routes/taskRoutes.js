import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  createTask,
  getTasks,
  deleteTask,
  getDashboardStats,
  toggleTask,
    updateTask
} from "../controllers/taskController.js";


const router = express.Router();


router.get(
  "/stats",
  authMiddleware,
  getDashboardStats
);


router.post(
  "/",
  authMiddleware,
  createTask
);


router.get(
  "/",
  authMiddleware,
  getTasks
);


router.patch(
  "/:id",
  authMiddleware,
  toggleTask
);

router.delete("/:id", authMiddleware, deleteTask);

router.put("/:id", authMiddleware, updateTask);

export default router;