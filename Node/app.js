// order of explanations: as in the diagram
// app -> routes -> controllers -> util & models

// Anatomy of a server:

// express import
const express = require('express');
//collegeRoutes is a routing file where all the routes (e.g. '/students') are defined:
const collegeRoutes = require('./routes/college');

// setting up server via express:
const app = express();
// for POST requests with bodies, we can't parse them without a JSON parser
// 'body-parser' package is an option, but express has a built-in parser:
app.use(express.json());


// Some access configuration options, more detail in docs:
// https://expressjs.com/en/resources/middleware/cors.html#configuration-options
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// requests are redirected to be handled by the routes file:
app.use('/', collegeRoutes);



// port setup and listen/server launch:
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port);
