const db = require('../models');
const Campus = db.Campus;
const Student = db.Student;
// columns: campusId (autoIncrement), campusName, campusLocation, campusUrl, campusDesc

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


exports.addCampus = async (req, res, next) => {
    const { campusName, campusLocation, campusUrl, campusDesc } = req.body;
    try {
        await Campus.create({
            name : campusName,
            location : campusLocation,
            url : campusUrl,
            desc : campusDesc
        });
        res.status(201).json({
            message: `Campus '${campusName}' added. Full data:`,
            campus: { 
                name : campusName,
                location : campusLocation,
                url : campusUrl,
                desc : campusDesc
            }
        });
    } catch (err) {
        res.status(404).json({error : err});
    }
}

exports.updateCampus = async (req, res, next) => {
    const { campusId, campusName, campusLocation, campusUrl, campusDesc } = req.body;
    try {
        await Campus.update({
            name : campusName,
            location : campusLocation,
            url : campusUrl,
            desc : campusDesc
        }, {where : { id : campusId }});
        res.status(200).json({
            message: `Campus '${campusName}' updated. Full data:`,
            campus: { 
                name : campusName,
                location : campusLocation,
                url : campusUrl,
                desc : campusDesc
            }
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
        await Campus.destroy({where : {id : campusId}});
        await Student.update({campusId : null}, {where : { campusId : campusId }})
        res.status(200).json({ outcome: `Campus with id ${campusId} deleted. All its students have been unenrolled.` });
    } catch(err) {
        console.log(err);
        res.status(404).json({error : err});
    }
}