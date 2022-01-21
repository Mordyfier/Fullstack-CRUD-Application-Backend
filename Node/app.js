const express = require('express');
const collegeRoutes = require('./routes/college');
const app = express();
const db = require('./models');
const sequelize = db.sequelize;

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

sequelize.sync()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

app.listen(port);
