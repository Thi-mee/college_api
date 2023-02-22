var facultyDb = require("./dbFiles/facultyDB");
var router = require("express").Router();

// var Faculty = require("./dbObjects/faculty");


router.route("/faculties").get((request, response) => {
  facultyDb.getFaculties().then((data) => {
    response.json(data[0]);
  });
});

router.route("/faculties/:id").get((request, response) => {
  facultyDb.getFaculty(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/faculties").post((request, response) => {
  let faculty = { ...request.body };
  facultyDb.addFaculty(faculty).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/faculties").put((request, response) => {
  let faculty = { ...request.body };
  facultyDb.editFaculty(faculty).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/faculties/:id").delete((request, response) => {
  facultyDb.removeFaculty(request.params.id).then((data) => {
    response.json(data[0]);
  });
});




module.exports = router;