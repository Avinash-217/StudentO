const express = require("express");

const router = express.Router();

const studentController =
require("../controllers/student.controller");

router.get("/getStudent", studentController.getStudents);

router.post("/getStudent", studentController.addStudent);

router.put("/updateId/:id", studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent);

module.exports = router;
