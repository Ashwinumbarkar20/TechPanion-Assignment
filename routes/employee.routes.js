const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');
const empmiddleware= require("../Middleware/validateEmployee.middleware");
const validadate = require("../Middleware/validateId.middleware");

router.post('/',empmiddleware,employeeController.addEmp);
router.delete('/:id', validadate.validateId,employeeController.deleteEmp);
router.get('/name/:name', employeeController.getEmpByName);
router.get('/highest-salary', employeeController.getEmpWithHighestSalary);
router.get('/', employeeController.getAllEmp);
router.put('/:id', validadate.validateId, employeeController.updateEmp);
module.exports = router;
