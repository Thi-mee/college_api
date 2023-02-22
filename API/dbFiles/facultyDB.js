var config = require("../dbconfig");
const sql = require("mssql");

async function getFaculties() {
  try {
    let pool = await sql.connect(config);
    let faculties = await pool.request().query("SELECT * from Faculty");
    return faculties.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getFaculty(facultyId) {
  try {
    let pool = await sql.connect(config);
    let faculty = await pool
      .request()
      .input("input_parameter", sql.Int, facultyId)
      .query("SELECT * from Academic where FacultyId = @input_parameter");
    return faculty.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addFaculty(faculty) {
  try {
    let pool = await sql.connect(config);
    let insertFaculty = await pool
      .request()
      .input("name", sql.NVarChar, faculty.Name)
      .input("uid", sql.Int, faculty.Uid)
      .input("code", sql.NVarChar, faculty.Code)
      .input("status", sql.NVarChar, faculty.Status)
      .execute("InsertFaculty");
    return insertFaculty.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function deleteFaculty(facultyId) {
  try {
    let pool = await sql.connect(config);
    let deleteFaculty = await pool
      .request()
      .input("input_parameter", sql.Int, facultyId)
      .query("DELETE from Faculty where Id = @input_parameter");
    return deleteFaculty.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getFaculties: getFaculties,
  getFaculty: getFaculty,
  addFaculty: addFaculty,
  deleteFaculty: deleteFaculty,
};