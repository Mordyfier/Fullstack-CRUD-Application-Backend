const db = require('../models');
const Student = db.Student;
// columns: studentId (autoIncrement), studentFirstName, studentLastName, studentEmail, studentImageUrl, studentGpa 


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
    const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
    try {
        await Student.create({
            firstName : firstName,
            lastName : lastName,
            email : email,
            imageUrl : imageUrl,
            gpa : gpa,
            campusId : campusId
        });
        res.status(201).json({
            message: `Student '${firstName} ${lastName}' added. Full data:`,
            student: { 
                firstName : firstName,
                lastName : lastName,
                email : email,
                imageUrl : imageUrl,
                gpa : gpa,
                campusId : campusId
            }
        });
    } catch (err) {
        console.log(req.body);
        res.status(404).json({error : err});
    }
}

exports.updateStudent = async (req, res, next) => {
    const { studentId, firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
    try {
        await Student.update({
                firstName : firstName,
                lastName : lastName,
                email : email,
                imageUrl : imageUrl,
                gpa : gpa,
                campusId : campusId
            }, 
            {where : { id : studentId }}
        );
        res.status(200).json({
            message: `Student '${firstName} ${lastName}' updated. Full data:`,
            student: { 
                firstName : firstName,
                lastName : lastName,
                email : email,
                imageUrl : imageUrl,
                gpa : gpa,
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