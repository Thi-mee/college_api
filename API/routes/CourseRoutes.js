var router = require("express").Router();
var courseDB = require("../dbFiles/courseDB");

//========================Courses ========================
router.route("/courses").get((request, response) => {
  courseDB.getCourses().then((data) => {
    response.json(data[0]);
  });
});

router.route("/courses/:id").get((request, response) => {
  courseDB.getCourse(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/courses").post((request, response) => {
  let dept = { ...request.body };
  courseDB.addCourse(dept).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/courses").put((request, response) => {
  let dept = { ...request.body };
  courseDB.editCourse(dept).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/courses/:id").delete((request, response) => {
  courseDB.removeCourse(request.params.id).then((data) => {
    response.json(data[0]);
  });
});


module.exports = router;