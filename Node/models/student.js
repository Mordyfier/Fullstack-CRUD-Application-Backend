const db = require('../util/database');

module.exports = class Professor {
    constructor(student_id, student_name, student_dob) {
        this.id = student_id;
        this.name = student_name;
        this.dob = student_dob;
    }


    save() {
        return db.query('INSERT INTO college.students(student_id, student_name, student_dob) VALUES ($1, $2, $3)',
        [this.id, this.name, this.dob]);
    }

    static fetchAll() {
        return db.query('SELECT * FROM college.students');
    }

}