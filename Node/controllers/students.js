const db = require('../models');
const Student = db.Student;
// columns: studentId (autoIncrement), studentName, studentDob, studentSex, studentGpa, studentUrl


exports.readStudents = async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch(err) {
        res.status(404).json({error : err})
    }
};

exports.readStudent = async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id);
        res.status(200).json(student);
    } catch(err) {
        res.status(404).json({error : err})
    }
};


exports.createStudent = async (req, res, next) => {
    const { studentName, studentDob, studentSex, studentGpa, studentUrl, campusId } = req.body;
    try {
        await Student.create({
            name : studentName,
            dob : studentDob,
            sex : studentSex,
            gpa : studentGpa,
            url : studentUrl,
            campusId : campusId
        });
        res.status(201).json({
            message: `Student '${studentName}' added. Full data:`,
            student: { 
                name : studentName,
                dob : studentDob,
                sex : studentSex,
                gpa : studentGpa,
                url : studentUrl,
                campusId : campusId
            }
        });
    } catch (err) {
        res.status(404).json({error : err});
    }
}

exports.updateStudent = async (req, res, next) => {
    const { studentId, studentName, studentDob, studentSex, studentGpa, studentUrl, campusId } = req.body;
    try {
        await Student.update({
            name : studentName,
            dob : studentDob,
            sex : studentSex,
            gpa : studentGpa,
            url : studentUrl,
            campusId : campusId
        }, {where : { id : studentId }});
        res.status(200).json({
            message: `Student '${studentName}' updated. Full data:`,
            student: { 
                name : studentName,
                dob : studentDob,
                sex : studentSex,
                gpa : studentGpa,
                url : studentUrl,
                campusId : campusId
            }
        });
    } catch (err) {
        res.status(404).json({error : err});
    }
}

exports.deleteStudent = async (req, res, next) => {
    const studentId = req.params.id;
    try {
        await Student.destroy({where : {id : studentId}});
        res.status(200).json({ outcome: `Student with id ${studentId} deleted.`});
    } catch(err) {
        console.log(err);
        res.status(404).json({error : err});
    }
}