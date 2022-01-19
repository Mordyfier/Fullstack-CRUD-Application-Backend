// import of the database util that contains out query pool
const db = require('../util/database');


// Course class allows us to formulate a course for input (using save())
// or to fetchAll() using the appropriate query
module.exports = class Course {
    constructor(course_id, course_name) {
        this.id = course_id;
        this.name = course_name;
    }

    // $1, $2 sanitize the input to prevent sql injection (think that XKCD with Bobby Tables)
    save() {
        return db.query('INSERT INTO college.courses(course_id, course_name) VALUES ($1, $2)', [this.id, this.name]);
    }

    static fetchAll() {
        return db.query('SELECT * FROM college.courses');
    }

}