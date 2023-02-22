var config = require("../dbconfig");
const sql = require("mssql");

async function getDepartments() {
  try {
    let pool = await sql.connect(config);
    let departments = await pool.request().query("SELECT * from Department");
    return departments.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getDepartment(departmentId) {
  try {
    let pool = await sql.connect(config);
    let department = await pool
      .request()
      .input("input_parameter", sql.Int, departmentId)
      .query("SELECT * from Academic WHERE DepartmentId = @input_parameter");
    return department.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addDepartment(department) {
  try {
    let pool = await sql.connect(config);
    let insertDepartment = await pool
      .request()
      .input("facultyId", sql.VarChar, department.FacultyId)
      .input("name", sql.NVarChar, department.Name)
      .input("uniqueId", sql.NChar, department.UniqueID)
      .input("code", sql.VarChar, department.Code)
      .input("status", sql.NVarChar, department.Status)
      .execute("InsertDepartment");
    return insertDepartment.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function deleteDepartment(departmentId) {
  try {
    let pool = await sql.connect(config);
    let deleteDepartment = await pool
      .request()
      .input("input_parameter", sql.Int, departmentId)
      .query("DELETE from Department where Id = @input_parameter");
    return deleteDepartment.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function editDepartment(department) {
  try {
    let pool = await sql.connect(config);
    let updateDepartment = await pool
      .request()
      .input("facultyId", sql.VarChar, department.FacultyId)
      .input("name", sql.NVarChar, department.Name)
      .input("uniqueId", sql.NChar, department.UniqueID)
      .input("code", sql.VarChar, department.Code)
      .input("status", sql.NVarChar, department.Status)
      .execute("UpdateDepartment");
    return updateDepartment.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getDepartments: getDepartments,
  getDepartment: getDepartment,
  addDepartment: addDepartment,
  deleteDepartment: deleteDepartment,
  editDepartment: editDepartment  
};