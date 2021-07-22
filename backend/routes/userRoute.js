const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/userController");

router.route("/").get(getAllStudents).post(createStudent);

router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
