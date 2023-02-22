var config = require("../dbconfig");
const sql = require("mssql");

async function getLecturers() {
  try {
    let pool = await sql.connect(config);
    let lecturers = await pool.request().query("SELECT * from Lecturer");
    return lecturers.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getLecturer(lecturerId) {
  try {
    let pool = await sql.connect(config);
    let lecturer = await pool
      .request()
      .input("input_parameter", sql.Int, lecturerId)
      .query("SELECT * from Academic where LecturerId = @input_parameter");
    return lecturer.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addLecturer(lecturer) {
  try {
    let pool = await sql.connect(config);
    let insertLecturer = await pool
      .request()
      .input("departmentId", sql.Int, lecturer.DepartmentId)
      .input("title", sql.NVarChar, lecturer.Title)
      .input("surname", sql.NVarChar, lecturer.Surname)
      .input("firstName", sql.NVarChar, lecturer.FirstName)
      .input("otherNames", sql.NVarChar, lecturer.OtherNames)
      .input("staffId", sql.Int, lecturer.StaffId)
      .input("status", sql.Int, lecturer.Status)
      .execute("InsertLecturer");
    return insertLecturer.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function deleteLecturer(lecturerId) {
  try {
    let pool = await sql.connect(config);
    let deleteLecturer = await pool
      .request()
      .input("input_parameter", sql.Int, lecturerId)
      .query("DELETE from Lecturer where Id = @input_parameter");
    return deleteLecturer.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function editLecturer(lecturer) {
  try {
    let pool = await sql.connect(config);
    let updateLecturer = await pool
      .request()
      .input("id", sql.Int, lecturer.Id)
      .input("departmentId", sql.Int, lecturer.DepartmentId)
      .input("title", sql.NVarChar, lecturer.Title)
      .input("surname", sql.NVarChar, lecturer.Surname)
      .input("firstName", sql.NVarChar, lecturer.FirstName)
      .input("otherNames", sql.NVarChar, lecturer.OtherNames)
      .input("staffId", sql.Int, lecturer.StaffId)
      .input("status", sql.Int, lecturer.Status)
      .execute("UpdateLecturer");
    return updateLecturer.recordsets;
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
  getLecturers: getLecturers,
  getLecturer: getLecturer,
  addLecturer: addLecturer,
  deleteLecturer: deleteLecturer,
  editLecturer: editLecturer
};