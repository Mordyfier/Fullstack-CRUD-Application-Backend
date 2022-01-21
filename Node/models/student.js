module.exports = (sequelize, DataTypes) =>  {
    const Student = sequelize.define('student', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull : false,
            primaryKey : true
        },
        firstName : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
            }
        },
        lastName : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
            }
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
                isEmail : true
            }
        },
        imageUrl : {
            type : DataTypes.STRING,
            defaultValue : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        },
        gpa : {
            type : DataTypes.DOUBLE,
            allowNull : false,
            validate : {
                min : 0.0,
                max : 4.0,
                isDecimal : true
            }
        },
    });
    return Student;
}