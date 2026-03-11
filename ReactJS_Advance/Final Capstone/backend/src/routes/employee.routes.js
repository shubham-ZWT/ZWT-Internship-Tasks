const express = require("express");
const employeeController = require("../controllers/employee.controller");
const router = express.Router();

//Create Employee
router.post("", employeeController.CreateEmployee);

//Get all Employees
router.get("", employeeController.GetAllEmployees);

//Get Employee Details
router.get("/:id", employeeController.GetEmployeeDetails);

//Update Employee
router.put("/:id", employeeController.UpdateEmployee);

//Delete Employee
router.delete("/:id", employeeController.DeleteEmployee);

module.exports = router;
