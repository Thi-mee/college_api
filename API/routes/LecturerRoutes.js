var router = require("express").Router();
var lecturerDB = require("../dbFiles/lecturerDB");

//========================Lecturer ========================

router.route("/lecturers").get((request, response) => {
  lecturerDB.getLecturers().then((data) => {
    response.json(data[0]);
  });
});

router.route("/lecturers/:id").get((request, response) => {
  lecturerDB.getLecturer(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/lecturers").post((request, response) => {
  let lecturer = { ...request.body };
  lecturerDB.addLecturer(lecturer).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/lecturers").put((request, response) => {
  let lecturer = { ...request.body };
  lecturerDB.editLecturer(lecturer).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/lecturers/:id").delete((request, response) => {
  lecturerDB.removeLecturer(request.params.id).then((data) => {
    response.json(data[0]);
  });
});


module.exports = router;