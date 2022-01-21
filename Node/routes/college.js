const express = require('express');

const campusesController = require('../controllers/campuses');
const studentsController = require('../controllers/students')

const router = express.Router();


router.get('/students', studentsController.readStudents);
router.get('/students/:id', studentsController.readStudent);
router.post('/students', studentsController.createStudent);
router.put('/students', studentsController.updateStudent);
router.delete('/students/:id', studentsController.deleteStudent);

router.get('/campuses', campusesController.getAllCampuses);
router.get('/campuses/:id', campusesController.getCampusById);
router.get('/campuses/:id/students', campusesController.getCampusStudents);
router.post('/campuses', campusesController.createCampus);
router.put('/campuses', campusesController.updateCampus);
router.delete('/campuses/:id', campusesController.deleteCampus);

module.exports = router;