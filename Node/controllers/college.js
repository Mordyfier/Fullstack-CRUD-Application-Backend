// import of models - more infor there:
const Student = require('../models/student');
const Professor = require('../models/professor');
const Course = require('../models/course');
const Department = require('../models/department');


// anatomy of a controller function - GET version:
// exports. - so that each controller is exported without having to export them all together at the end
// <class>.fetchAll() - a static function of the class that requests all entries from the corresponding database with a query
// (more detail on that in the models - since all the models are pretty much the same, I put it in course.js)
// res.status(200).json(result.rows) sends the response in JSON form

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

// anatomy of a controller function - POST version:
// exports. - as before
// first { declaration } destructures the request body obtaining the appropriate data entries
// using those variables, we create a new <class> object using the model
// save() is an instance method that inserts the object into the database 
// res.status(200).json(result.rows) sends the response in JSON form

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