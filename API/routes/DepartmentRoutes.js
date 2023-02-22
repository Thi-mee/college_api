var router = require("express").Router();
var departmentDb = require("../dbFiles/departmentDB");

router.route("/departments").get((request, response) => {
  departmentDb.getDepartments().then((data) => {
    response.json(data[0]);
  });
});

router.route("/departments/:id").get((request, response) => {
  departmentDb.getDepartment(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/departments").post((request, response) => {
  let dept = { ...request.body };
  departmentDb.addDepartment(dept).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/departments").put((request, response) => {
  let dept = { ...request.body };
  departmentDb.editDepartment(dept).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/departments/:id").delete((request, response) => {
  departmentDb.removeDepartment(request.params.id).then((data) => {
    response.json(data[0]);
  });
});


module.exports = router;