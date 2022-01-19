const db = require('../util/database');

module.exports = class Department {
    constructor(dept_id, dept_name) {
        this.id = dept_id;
        this.name = dept_name;
    }


    save() {
        return db.query('INSERT INTO college.departments(dept_id, dept_name) VALUES ($1, $2)', [this.id, this.name]);
    }

    static fetchAll() {
        return db.query('SELECT * FROM college.departments');
    }

}