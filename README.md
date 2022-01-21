# Fullstack-CRUD-Application-Backend

This is a REST API designed for the TTP Fullstack CRUD Application assignment.

Standard CRUD operations available.

# Endpoints:

## GET -- Reading from the tables

### For students:
### [/students](https://ttp-college-db.herokuapp.com/students) - Returns an array of students from the Postgres database
### [/students/:id](https://ttp-college-db.herokuapp.com/students/2) - Returns an individual student

### For campuses:
### [/campuses](https://ttp-college-db.herokuapp.com/campuses) - Returns an array of campuses from the Postgres database
### [/campuses/:id](https://ttp-college-db.herokuapp.com/campuses/1) - Returns an individual campus
### [/campuses/:id/students](https://ttp-college-db.herokuapp.com/campuses/1/students) - Returns all of the students associated with the campus specified with the id url parameter

## POST -- Inserting data into the tables

### /students - Inserts a student into the students table. 
Body example: 
```JSON
{
    "firstName" : "Joe",
    "lastName" : "Student",
    "email" : "joe@mama.com",
    "imageUrl" : "https://someUrl.com",
    "gpa" : 3.4,
    "campusId" : null
}
```

Where: 
- `firstName`, `lastName` are strings. Cannot be null or empty string.
- `email` constraints: not null, must be a valid email format.
- `imageUrl` default value is a placeholder. If you have no image, leave this field out of your request body to leave it default. 
- `gpa` is a double, constrained to be a value between 0 and 4.
- `campusId` is an integer reference to the campus the student is associated with (`null` is an acceptable value in case student has no campus). 


### /campuses - Likewise, inserts a campus into the campuses table.
Body example:
```JSON
{
    "name" : "Brooklyn College",
    "imageUrl" : "https://www.amny.com/wp-content/uploads/2021/02/BC2.jpg",
    "address" : "2900 Bedford Ave, Brooklyn, NY 11210",
    "description" : "Brooklyn College is a public university in Brooklyn, New York. It is part of the City University of New York system and enrolls about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus."
}
```
Where: 
- `name` is a non-null, non-empty string; 
- `imageUrl` contains placeholder image by default, ignore if got nothing better 😉; 
- `address` non-null, non-empty string; 
- `description` extremely large *text*.

## PUT -- Updating data in the tables

### Besides `id`, only fields we intend to change need to be specified! (No need to repeat all the information just to change gpa or something.)

### /students - Updates a student record. Body same as POST requests, except `id` (integer) must also be specified (to indicate *which* student we're editing).

### /campuses - Same as /students, but for a campus. Likewise, `id` (integer) must be specified.

Body example for /students (same logic applies for /campuses):
```JSON
{
    "id" : 1,
    "firstName" : "Joe",
    "lastName" : "Student",
    "email" : "joe@mama.com",
    "imageUrl" : "https://someUrl.com",
    "gpa" : 3.4,
    "campusId" : null
}
```


## DELETE -- 🤔🤔🤔

### /students/:id

### /campuses/:id

Deletes the entry under the id specified in the url parameter. For campuses, removes every associated student's association.
