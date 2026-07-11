import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://add-task-self.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/tasks",
  taskRoutes
);

app.use("/api/activity", activityRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});