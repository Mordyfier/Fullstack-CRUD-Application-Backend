const express = require('express');

const collegeController = require('../controllers/college');

const router = express.Router();

router.get('/students', collegeController.getAllStudents);
router.get('/courses', collegeController.getAllCourses);
router.get('/professors', collegeController.getAllProfessors);
router.get('/departments', collegeController.getAllDepartments);

router.post('/students/add', collegeController.addStudent);
router.post('/courses/add', collegeController.addCourse);
router.post('/professors/add', collegeController.addProfessor);
router.post('/departments/add', collegeController.addDepartment);


module.exports = router;