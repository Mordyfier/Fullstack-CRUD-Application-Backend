const db = require('../util/database');

module.exports = class Professor {
    constructor(student_name, student_dob, student_gpa, student_url) {
        this.name = student_name;
        this.dob = student_dob;
        this.gpa = student_gpa;
        this.url = student_url;
    }

    save() {
        return db.query('INSERT INTO colleges.students(student_name, student_dob, student_gpa, student_url) VALUES ($1, $2, $3, $4)',
        [this.name, this.dob, this.gpa, this.url]);
    }

    static fetchAll() {
        return db.query('SELECT * FROM colleges.students');
    }

    static fetchById(id) {
        return db.query('SELECT * FROM colleges.students WHERE colleges.students.student_id = $1', [id]);
    }

}