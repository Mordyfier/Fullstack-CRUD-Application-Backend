const db = require('../models');
const Campus = db.Campus;
const Student = db.Student;
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
    const { name, imageUrl, address, desc } = req.body;
    try {
        await Campus.create({
            name : name,
            imageUrl : imageUrl,
            address : address,
            description : desc
        });
        res.status(201).json({
            message: `Campus '${name}' added. Full data:`,
            campus: { 
                name : name,
                imageUrl : imageUrl,
                address : address,
                description : desc
            }
        });
    } catch (err) {
        res.status(404).json({error : err});
    }
}

exports.updateCampus = async (req, res, next) => {
    const { campusId, campusName, campusImageUrl, campusAddress, campusDesc } = req.body;
    try {
        await Campus.update({
                name : campusName,
                imageUrl : campusImageUrl,
                address : campusAddress,
                description : campusDesc
            }, 
            { where : { id : campusId } }
        );
        res.status(200).json({
            message: `Campus '${campusName}' updated. Full data:`,
            campus: { 
                name : campusName,
                imageUrl : campusImageUrl,
                address : campusAddress,
                description : campusDesc
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