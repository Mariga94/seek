import express from "express";
import {
  createProject,
  getProject,
  deleteProject,
  getProjects,
} from "../../controllers/projectControllers.js";
import { verifyToken } from "../../middleware/jwt.js";

const router = express.Router();
router.get("/single/:id", verifyToken, getProject);
router.get("/", verifyToken, getProjects)
router.post("/", verifyToken, createProject);
router.delete("/:id", verifyToken, deleteProject);

export default router;
