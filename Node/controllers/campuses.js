const db = require('../models');
const { Campus, Student } = db;
// columns: campusId (autoIncrement), campusName, campusImageUrl, campusAddress, campusDesc

exports.getAllCampuses = async (req, res, next) => {
    try {
        const campuses = await Campus.findAll();
        res.status(200).json(campuses);
    } catch(err) {
        res.status(404).json({error : err})
    }
};

exports.getCampusById = async (req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.id);
        res.status(200).json(campus);
    } catch(err) {
        res.status(404).json({error : err})
    }
};


exports.createCampus = async (req, res, next) => {
    try {
        const campus = await Campus.create(req.body);
        res.status(201).json({
            message: `Campus '${campus.name}' created. Full data:`,
            campus: campus
        });
    } catch (err) {
        res.status(404).json({error : err});
    }
}

exports.updateCampus = async (req, res, next) => {
    try {
        const updated = await Campus.update(req.body, { 
            where : { id : req.body.id },
            returning : true 
        });
        res.status(200).json({
            message: `Campus with id ${req.body.id} (${updated[1][0].dataValues.name}) updated. Full data:`,
            campus: updated[1][0].dataValues
        });
    } catch (err) {
        res.status(404).json({error : err});
    }
}

exports.getCampusStudents = async (req, res, next) => {
    const campusId = req.params.id;
    try {
        const students = await Student.findAll({where : { campusId : campusId }});
        res.status(200).json(students);
    } catch(err) {
        res.status(404).json({error : err})
    }
}

exports.deleteCampus = async (req, res, next) => {
    const campusId = req.params.id;
    try {
        await Campus.destroy({ where : { id : campusId } });
        await Student.update({ campusId : null }, { where : { campusId : campusId }})
        res.status(200).json({ outcome: `Campus with id ${campusId} deleted. All its students have been unenrolled.` });
    } catch(err) {
        console.log(err);
        res.status(404).json({error : err});
    }
}