const router = require("express").Router();
const controller = require("./controller.js");

// Todo: Fill out the following routes:

// routes for retrieving all students and adding a new student
router
  .route("/students")
  .get(controller.students.getStudents)
  .post(controller.students.postStudent);

//.get(controller.students.getStudents())
//.post(controller.students.postStudent());

// route for updating a student's name
router.route("/students/:id").put(controller.students.updateName);

module.exports = router;
