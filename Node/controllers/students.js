const db = require('../models');
const { Student } = db;
// columns: studentId (autoIncrement), studentFirstName, studentLastName, studentEmail, studentImageUrl, studentGpa 


exports.getStudents = async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch(err) {
        res.status(404).json({error : err})
    }
};

exports.getStudent = async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id);
        res.status(200).json(student);
    } catch(err) {
        res.status(404).json({error : err})
    }
};


exports.createStudent = async (req, res, next) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json({
            message: `Student '${student.firstName} ${student.lastName}' added. Full data:`,
            student: student
        });
    } catch (err) {
        res.status(404).json({error : err});
    }
}

exports.updateStudent = async (req, res, next) => {
    try {
        const updated = await Student.update(req.body, {
            where : { id : req.body.id },
            returning : true
        });
        res.status(200).json({
            message: `Student with id ${req.body.id} (${updated[1][0].dataValues.lastName}, ${updated[1][0].dataValues.firstName}) updated. Full data:`,
            student: updated[1][0].dataValues
        });
        console.log(updated[1][0].dataValues);
    } catch (err) {
        res.status(404).json({ error : err });
    }
}

exports.deleteStudent = async (req, res, next) => {
    const studentId = req.params.id;
    try {
        await Student.destroy({where : { id : studentId }});
        res.status(200).json({ outcome: `Student with id ${studentId} deleted.`});
    } catch(err) {
        console.log(err);
        res.status(404).json({ error : err });
    }
}
