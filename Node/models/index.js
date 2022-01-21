const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.API_KEY, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Campus = require('./campus')(sequelize, Sequelize);
db.Student = require('./student')(sequelize, Sequelize);

db.Campus.hasMany(db.Student);
db.Student.belongsTo(db.Campus);

module.exports = db;