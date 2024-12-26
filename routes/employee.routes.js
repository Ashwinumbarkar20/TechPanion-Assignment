const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');
const empmiddleware= require("../Middleware/validateEmployee.middleware");
const validadate = require("../Middleware/validateId.middleware");

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Employee management APIs
 */

/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Add a new employee
 *     tags: [Employees]
 *     parameters:
 *       - in: body
 *         name: employee
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             age:
 *               type: number
 *             department:
 *               type: string
 *     responses:
 *       201:
 *         description: Employee added successfully
 */




router.post("/", empmiddleware, employeeController.addEmp);

/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: Delete an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 */
router.delete('/:id', validadate.validateId,employeeController.deleteEmp);

/**
 * @swagger
 * /api/employees/name/{name}:
 *   get:
 *     summary: Get an employee by name
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee name
 *     responses:
 *       200:
 *         description: Employee retrieved successfully
 *       404:
 *         description: Employee not found
 */
router.get('/name/:name', employeeController.getEmpByName);

/**
 * @swagger
 * /api/employees/highest-salary:
 *   get:
 *     summary: Get the employee with the highest salary
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: Employee retrieved successfully
 */

router.get('/highest-salary', employeeController.getEmpWithHighestSalary);
/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: List of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   age:
 *                     type: number
 *                   department:
 *                     type: string
 */
router.get('/', employeeController.getAllEmp);
/**
 * @swagger
 * /api/employees/{id}:
 *   put:
 *     summary: Update an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee ID
 *       - in: body
 *         name: employee
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             age:
 *               type: number
 *             department:
 *               type: string
 *     responses:
 *       200:
 *         description: Employee updated successfully
 */
router.put('/:id', validadate.validateId, employeeController.updateEmp);
module.exports = router;
