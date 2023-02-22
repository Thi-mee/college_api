var router = require("express").Router();
var courseOfStudyDB = require("../dbFiles/courseOfStudyDB");

router.route("/courseOfStudies").get((request, response) => {
  courseOfStudyDB.getCourseOfStudies().then((data) => {
    response.json(data[0]);
  });
});

router.route("/courseOfStudies/:id").get((request, response) => {
  courseOfStudyDB.getCourseOfStudy(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/courseOfStudies").post((request, response) => {
  let cos = { ...request.body };
  courseOfStudyDB.addCourseOfStudy(cos).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/courseOfStudies").put((request, response) => {
  let cos = { ...request.body };
  courseOfStudyDB.editCourseOfStudy(cos).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/courseOfStudies/:id").delete((request, response) => {
  courseOfStudyDB.removeDepartment(request.params.id).then((data) => {
    response.json(data[0]);
  });
});


module.exports = router;