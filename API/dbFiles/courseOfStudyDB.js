var config = require("../dbconfig");
const sql = require("mssql");

async function getCourseOfStudy() {
  try {
    let pool = await sql.connect(config);
    let courseOfStudy = await pool.request().query("SELECT * from CourseOfStudy");
    return courseOfStudy.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getCourseOfStudy(courseOfStudyId) {
  try {
    let pool = await sql.connect(config);
    let courseOfStudy = await pool
      .request()
      .input("input_parameter", sql.Int, courseOfStudyId)
      .query("SELECT * from Academic where CourseOfStudyId = @input_parameter");
    return faculty.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addCourseOfStudy(courseOfStudy) {
  try {
    let pool = await sql.connect(config);
    let insertCourseOfStudy = await pool
      .request()
      .input("courseOfStudyId", sql.NVarChar, courseOfStudy.CourseOfStudyId)
      .input("departmentId", sql.NVarChar, courseOfStudy.DepartmentId)
      .input("name", sql.NVarChar, courseOfStudy.Name)
      .input("shortName", sql.VarChar, courseOfStudy.ShortName)
      .input("uniqueID", sql.VarChar, courseOfStudy.UniqueID)
      .input("award", sql.NVarChar, courseOfStudy.Award)
      .input("duration", sql.Int, courseOfStudy.Duration)
      .input("requiredCreditUnits", sql.Int, courseOfStudy.RequiredCreditUnits)
      .input("advisor", sql.NVarChar, courseOfStudy.Advisor)
      .input("status", sql.NVarChar, courseOfStudy.Status)
      .execute("InsertCourseOfStudy");
    return insertCourseOfStudy.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function deleteCourseOfStudy(courseOfStudyId) {
  try {
    let pool = await sql.connect(config);
    let deleteCourseOfStudy = await pool
      .request()
      .input("input_parameter", sql.Int, courseOfStudyId)
      .query("DELETE from CourseOfStudy where Id = @input_parameter");
    return deleteCourseOfStudy.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function editCourseOfStudy(courseOfStudy) {
  try {
    let pool = await sql.connect(config);
    let updateCourseOfStudy = await pool
      .request()
      .input("courseOfStudyId", sql.NVarChar, courseOfStudy.CourseOfStudyId)
      .input("departmentId", sql.NVarChar, courseOfStudy.DepartmentId)
      .input("name", sql.NVarChar, courseOfStudy.Name)
      .input("shortName", sql.VarChar, courseOfStudy.ShortName)
      .input("uniqueID", sql.VarChar, courseOfStudy.UniqueID)
      .input("award", sql.NVarChar, courseOfStudy.Award)
      .input("duration", sql.Int, courseOfStudy.Duration)
      .input("requiredCreditUnits", sql.Int, courseOfStudy.RequiredCreditUnits)
      .input("advisor", sql.NVarChar, courseOfStudy.Advisor)
      .input("status", sql.Int, courseOfStudy.Status)
      .execute("UpdateCourseOfStudy");
    return updateCourseOfStudy.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getCourseOfStudy: getCourseOfStudy,
  getCourseOfStudy: getCourseOfStudy,
  addCourseOfStudy: addCourseOfStudy,
  deleteCourseOfStudy: deleteCourseOfStudy,
  editCourseOfStudy: editCourseOfStudy
};