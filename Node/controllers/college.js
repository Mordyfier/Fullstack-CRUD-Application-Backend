const Student = require('../models/student');
const Professor = require('../models/professor');
const Course = require('../models/course');
const Department = require('../models/department');



exports.getAllStudents = (req, res, next) => {
    Student.fetchAll()
    .then((result => {
        res.status(200).json(result.rows);
    }))
    .catch(err => console.log(err));
};


exports.getAllProfessors = (req, res, next) => {
    Professor.fetchAll()
    .then((result => {
        res.status(200).json(result.rows);
    }))
    .catch(err => console.log(err));
};


exports.getAllCourses = (req, res, next) => {
    Course.fetchAll()
    .then((result => {
        res.status(200).json(result.rows);
    }))
    .catch(err => console.log(err));
};


exports.getAllDepartments = (req, res, next) => {
    Department.fetchAll()
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

exports.addProfessor = (req, res, next) => {
    const {prof_id, prof_name, prof_dob, prof_dept} = req.body;
    const professor = new Professor(prof_id, prof_name, prof_dob, prof_dept);
    professor.save()
    .then(res.status(201).json({
        message: 'Professor added.',
        student: {
            id : prof_id,
            name : prof_name,
            dob : prof_dob,
            dept : prof_dept
        }
    }))
    .catch(err => console.log(err));
}
exports.addCourse = (req, res, next) => {
    const {course_id, course_name, course_dept} = req.body;
    const course = new Course(course_id, course_name, course_dept);
    course.save()
    .then(res.status(201).json({
        message: 'Course added.',
        student: {
            id : course_id,
            name : course_name,
            dept : course_dept
        }
    }))
    .catch(err => console.log(err));
    
}
exports.addDepartment = (req, res, next) => {
    const {dept_id, dept_name} = req.body;
    const department = new Department(dept_id, dept_name)
    department.save()
    .then(res.status(201).json({
        message: 'Department added.',
        student: {
            id : dept_id,
            name : dept_name
        }
    }))
    .catch(err => console.log(err));
}