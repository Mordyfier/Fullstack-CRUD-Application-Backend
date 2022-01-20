const Student = require('../models/student');
const Campus = require('../models/campus');



exports.getAllStudents = (req, res, next) => {
    Student.fetchAll()
    .then((result => {
        res.status(200).json(result.rows);
    }))
    .catch(err => console.log(err));
};

exports.getStudentById = (req, res, next) => {
    Student.fetchById(req.params.id)
    .then((result => {
        res.status(200).json(result.rows);
    }))
    .catch(err => console.log(err));
};

exports.getAllCampuses = (req, res, next) => {
    Campus.fetchAll()
    .then((result => {
        res.status(200).json(result.rows);
    }))
    .catch(err => console.log(err));
};

exports.getCampusById = (req, res, next) => {
    Campus.fetchById(req.params.id)
    .then((result => {
        res.status(200).json(result.rows);
    }))
    .catch(err => console.log(err));
};


exports.addStudent = (req, res, next) => {
    const {student_id, student_name, student_dob} = req.body;
    const student = new Student(student_id, student_name, student_dob);
    student.save()
        .then(res.status(201).json({
            message: 'Student added.',
            student: {
                id : student_id,
                name : student_name,
                dob : student_dob
            }
        }))
        .catch(err => console.log(err));
}


exports.addCampus = (req, res, next) => {
    const {campus_name, campus_location, campus_url, campus_desc} = req.body;
    const course = new Course(campus_name, campus_location, campus_url, campus_desc);
    course.save()
    .then(res.status(201).json({
        message: 'Course added.',
        student: { 
            name : campus_name, 
            location : campus_location, 
            image_url : campus_url, 
            description : campus_desc
        }
    }))
    .catch(err => console.log(err));
    
}
