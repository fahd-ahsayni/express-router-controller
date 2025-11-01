import express from "express";
import {
  createNewStudent,
  getAllStudent,
  getStudentById,
} from "../controllers/students";

const router = express.Router();

router.get("/", getAllStudent);
router.post("/", createNewStudent);
router.get("/:id", getStudentById);

export default router;
