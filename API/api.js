var facultyRoute = require('./routes/FacultyRoutes');
var departmentRoute = require('./routes/DepartmentRoutes');
var courseOfStudyRoute = require('./routes/courseOfStudyRoutes');
var courseRoute = require('./routes/CourseRoutes');
var lecturerRoute = require('./routes/LecturerRoutes');

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((request, response, next) => {
  console.log("middleware");
  next();
});

app.use("/api", facultyRoute);
app.use("/api", departmentRoute);
app.use("/api", courseOfStudyRoute);
app.use("/api", courseRoute);
app.use("/api", lecturerRoute);



var port = process.env.PORT || 8091;
app.listen(port);
console.log("Academics API is runnning at " + port);