const db = require('../util/database');

module.exports = class Course {
    constructor(course_id, course_name) {
        this.id = course_id;
        this.name = course_name;
    }


    save() {
        return db.query('INSERT INTO college.courses(course_id, course_name) VALUES ($1, $2)', [this.id, this.name]);
    }

    static fetchAll() {
        return db.query('SELECT * FROM college.courses');
    }

}