var config = require("../dbconfig");
const sql = require("mssql");

async function getCourses() {
  try {
    let pool = await sql.connect(config);
    let courses = await pool.request().query("SELECT * from Course");
    return courses.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getCourse(courseId) {
  try {
    let pool = await sql.connect(config);
    let course = await pool
      .request()
      .input("input_parameter", sql.Int, courseId)
      .query("SELECT * from Academic where CourseId = @input_parameter");
    return course.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addCourse(course) {
  try {
    let pool = await sql.connect(config);
    let insertCourse = await pool
      .request()
      .input("departmentId", sql.Int, course.DepartmentId)
      .input("name", sql.NVarChar, course.Name)
      .input("uniqueID", sql.VarChar, course.UniqueID)
      .input("units", sql.Int, course.Units)
      .input("code", sql.NVarChar, course.Code)
      .input("courseLevel", sql.Int, course.CourseLevel)
      .input("courseSemester", sql.Int, course.CourseSemester)
      .input("status", sql.Int, course.Status)
      .execute("InsertCourse");
    return insertCourse.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function deleteCourse(courseId) {
  try {
    let pool = await sql.connect(config);
    let deleteCourse = await pool
      .request()
      .input("input_parameter", sql.Int, courseId)
      .query("DELETE from Course where Id = @input_parameter");
    return deleteCourse.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function editCourse(courseId) {
  try {
    let pool = await sql.connect(config);
    let editCourse = await pool
      .request()
      .input("input_parameter", sql.Int, courseId)
      .query("UPDATE Course SET \
          DepartmentId = @departmentId, \
          Name = @name, \
          UniqueID = @uniqueID, \
          Units = @units, \
          Code = @code, \
          CourseLevel = @courseLevel, \
          CourseSemester = @courseSemester, \
          Status = @status \
          WHERE CourseId = @input_parameter");
    return editCourse.recordsets;
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  getCourses: getCourses,
  getCourse: getCourse,
  addCourse: addCourse,
  deleteCourse: deleteCourse,
  editCourse: editCourse
};