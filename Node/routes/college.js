const express = require('express');


// routes redirect to controllers that handle each route with appropriate logic
// this file can be thought of as a traffic controller that directs each request to appropriate controller function
const collegeController = require('../controllers/college');

const router = express.Router();

// get requests and their routes/endpoints:
router.get('/students', collegeController.getAllStudents);
router.get('/courses', collegeController.getAllCourses);
router.get('/professors', collegeController.getAllProfessors);
router.get('/departments', collegeController.getAllDepartments);

// post requests and their routes/endpoints:
router.post('/students/add', collegeController.addStudent);
router.post('/courses/add', collegeController.addCourse);
router.post('/professors/add', collegeController.addProfessor);
router.post('/departments/add', collegeController.addDepartment);


module.exports = router;