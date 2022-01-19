const db = require('../util/database');

module.exports = class Professor {
    constructor(prof_id, prof_name, prof_dob, prof_dept_id) {
        this.id = prof_id;
        this.name = prof_name;
        this.dob = prof_dob;
        this.dept = prof_dept_id;
    }


    save() {
        return db.query('INSERT INTO college.professors(prof_id, prof_name, prof_dob, prof_dept_id) VALUES ($1, $2, $3, $4)',
        [this.id, this.name, this.dob, this.dept]);
    }

    static fetchAll() {
        return db.query('SELECT * FROM college.professors');
    }

}