const express = require("express");

const {
  getAllStudent,
} = require("../controllers/students/get-all-students.controller");
const {
  createNewStudent,
} = require("../controllers/students/create-new-student.controller");
const {
  getStudentById,
} = require("../controllers/students/get-student-by-id.controller");

const router = express.Router();

router.get("/", getAllStudent);
router.post("/", createNewStudent);
router.get("/:id", getStudentById);

module.exports = router;
