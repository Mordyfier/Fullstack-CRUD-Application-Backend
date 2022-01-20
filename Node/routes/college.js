const express = require('express');

const collegeController = require('../controllers/colleges');

const router = express.Router();

router.get('/students', collegeController.getAllStudents);
router.get('/students/:id', collegeController.getStudentById);
router.get('/campuses', collegeController.getAllCampuses);
router.get('/campuses/:id', collegeController.getCampusById);

router.post('/students/add', collegeController.addStudent);
router.post('/campuses/add', collegeController.addCampus);



module.exports = router;