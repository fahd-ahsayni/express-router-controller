import express from "express";
import {
  getAllStudent,
} from "../controllers/students/get-all-students.controller.js";
import {
  createNewStudent,
} from "../controllers/students/create-new-student.controller.js";
import {
  getStudentById,
} from "../controllers/students/get-student-by-id.controller.js";

const router = express.Router();

router.get("/", getAllStudent);
router.post("/", createNewStudent);
router.get("/:id", getStudentById);

export default router;
