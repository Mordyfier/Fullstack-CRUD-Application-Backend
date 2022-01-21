module.exports = (sequelize, DataTypes) =>  {
    const Student = sequelize.define('student', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull : false,
            primaryKey : true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        dob : {
            type : DataTypes.DATE,
            allowNull : false
        },
        sex : {
            type : DataTypes.ENUM('M', 'F', 'O'),
            allowNull : false
        },
        gpa : {
            type : DataTypes.DOUBLE,
            allowNull : false
        },
        url : {
            type : DataTypes.STRING,
        }
    });
    return Student;
}