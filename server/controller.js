const Student = require("../db/Student.js");

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      Student.find()
        .then((students) => {
          res.json(students);
        })
        .catch((err) => {
          res.sendStatus(404);
        });
    },
    postStudent: function (req, res) {
      // TODO: add your code here to add a new student
      Student.create(req.body)
        .then(() => {
          console.log(req.body);
        })
        .then(() => {
          res.sendStatus(201);
        })
        .catch((err) => console.log(err));
    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      console.log(req.body);
      Student.findOneAndUpdate(req.params.id, req.body).then(() => {
        res.sendStatus(200);
      });
    },
  },
};

module.exports = controller;
