const db = require('../util/database');

module.exports = class Campus {
    constructor(campus_name, campus_location, campus_url, campus_desc) {
        this.name = campus_name,
        this.location = campus_location,
        this.url = campus_url,
        this.desc = campus_desc
    }

    save() {
        return db.query('INSERT INTO colleges.campuses(campus_name, campus_location, campus_url, campus_desc) VALUES ($1, $2, $3, $4)', 
        [this.name, this.location, this.url, this.desc]);
    }

    static fetchAll() {
        return db.query('SELECT * FROM colleges.campuses');
    }

    static fetchById(id) {
        return db.query('SELECT * FROM colleges.campuses WHERE colleges.campuses.campus_id = $1', [id]);
    }

}