# Fullstack-CRUD-Application-Backend

This is a REST API designed for the TTP Fullstack CRUD Application assignment.

Standard CRUD operations available.

# Endpoints:

## GET

For students:
- [/students](https://ttp-college-db.herokuapp.com/students) - Returns an array of students from the Postgres database
- [/students/:id](https://ttp-college-db.herokuapp.com/students/1) - Returns an individual student

For campuses:
- [/campuses](https://ttp-college-db.herokuapp.com/campuses) - Returns an array of campuses from the Postgres database
- [/campuses/:id](https://ttp-college-db.herokuapp.com/campuses/1) - Returns an individual campus
- [/campuses/:id/students](https://ttp-college-db.herokuapp.com/campuses/1/students) - Returns all of the students associated with the campus specified with the id url parameter

## POST

- /students - Inserts a student into the students table. 
Body example: 
```JSON
{
    "studentName" : "Joe Student",
    "studentDob" : "1997-05-07T00:00:00.000Z",
    "studentSex" : "M",
    "studentGpa" : 3,
    "studentUrl" : "https://someUrl.com",
    "campusId" : null
}
```

Where `studentName` is a string; `studentDob` is a date string (in whatever format is parsable as such in Postgres; 'YYYY-MM-DD' works); `studentSex` is Enum,
where the possible values are 'M', 'F', 'O'; `studentGpa` is a double - no constraints on it, but it only makes sense to make it between 0 and 4; `studentUrl` is a link
to student's picture; and, finally, `campusId` is an integer reference to the campus the student is associated with (`null` is an acceptable value in case student has no campus). 

- /campuses - Likewise, inserts a campus into the campuses table.
Body example:
```JSON
{
    "campusName" : "Brooklyn College",
    "campusLocation" : "2900 Bedford Ave, Brooklyn, NY 11210",
    "campusUrl" : "https://www.amny.com/wp-content/uploads/2021/02/BC2.jpg",
    "campusDesc" : "Brooklyn College is a public university in Brooklyn, New York. It is part of the City University of New York system and enrolls about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus."
}
```
Where `campusName` is a string; `campusLocation` is a string for the campus' address; `campusUrl` is a link to a picture of the campus; `campusDesc` is a short description
limited to 255 characters (would be prudent to put a limit on the input box in the frontend).

## PUT

- /students - Updates a student record. Body same as POST requests, except `"studentId"` (integer) must also be specified.

- /campuses - Same as /students, but for a campuse. Likewise, `"campusId"` (integer) must be specified.

Body example for /students (same logic applies for /campuses):
```JSON
{
    "studentId" : 1,
    "studentName" : "Joe Student",
    "studentDob" : "1997-05-07T00:00:00.000Z",
    "studentSex" : "M", 
    "studentGpa" : 3.1,
    "studentUrl" : "https://someUrl.com",
    "campusId" : null
}
```


## DELETE

- /students/:id

- /campuses/:id

Deletes the entry under the id specified in the url parameter. For campuses, removes every associated student's association.
