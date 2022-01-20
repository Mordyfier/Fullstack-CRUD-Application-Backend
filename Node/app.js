const express = require('express');
const app = express();
const collegeRoutes = require('./routes/college');

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', collegeRoutes);


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port);
