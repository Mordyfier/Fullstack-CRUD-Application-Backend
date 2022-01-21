# fetch() templates:

## GET:

```JS
async function getStudents() {
  const response = await fetch('https://ttp-college-db.herokuapp.com/students');
  const students = await response.json();
  console.log(students);
}
```

Output:

(Array)
```JS 
[0: {id: 1, name: 'Joe Student', dob: '1997-05-07T00:00:00.000Z', sex: 'M', gpa: 3.1, …}
1: {id: 2, name: 'Jane Student', dob: '1996-03-11T00:00:00.000Z', sex: 'F', gpa: 3.75, …}
2: {id: 3, name: 'Jane Student', dob: '1996-03-11T00:00:00.000Z', sex: 'F', gpa: 3.75, …}
3: {id: 4, name: 'John Smith', dob: '1997-03-19T00:00:00.000Z', sex: 'M', gpa: 2.9, …}
4: {id: 6, name: 'John Smith', dob: '1997-03-19T00:00:00.000Z', sex: 'M', gpa: 3.7, …}
5: {id: 7, name: 'John Smith', dob: '1997-03-19T00:00:00.000Z', sex: 'M', gpa: …}]
```

## POST:

```JS
async function postStudent() {
  const response = await fetch('https://ttp-college-db.herokuapp.com/students', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    }, 
    method: 'POST',
    body: JSON.stringify({
      "studentName": "John Smith",
      "studentDob": "1997-03-19",
      "studentSex": "M",
      "studentGpa": 2.9,
      "studentUrl": "",
      "campusId": 1
    }),
    redirect: 'follow'
  });
  const status = await response.json();
  console.log(status);
}
```
Output:

```JS

{
  message: "Student 'John Smith' added. Full data:"
  student: {name: 'John Smith', dob: '1997-03-19', sex: 'M', gpa: 2.9, url: '', … }
}

```

## PUT:

```JS
async function updateStudent() {
  const response = await fetch('https://ttp-college-db.herokuapp.com/students', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    }, 
    method: 'PUT',
    body: JSON.stringify({
      "studentId":5,
      "studentName": "John Smith",
      "studentDob": "1997-03-19",
      "studentSex": "M",
      "studentGpa": 3.7,
      "studentUrl": "",
      "campusId": 1
    }),
    redirect: 'follow'
  });
  const status = await response.json();
  console.log(status);
}
```

Output:


```JS
{
  message: "Student 'John Smith' updated. Full data:"
  student: {name: 'John Smith', dob: '1997-03-19', sex: 'M', gpa: 3.7, url: '', … }
}
```

##  DELETE:

```JS
async function deleteStudent() {
    const response = await fetch('https://ttp-college-db.herokuapp.com/students/5', { method : 'DELETE' });
    const deleted = await response.json();
    console.log(deleted);
}
```
Output:

```JS
{
  outcome: 'Student with id 5 deleted.'
}
```
