module.exports = (sequelize, DataTypes) =>  {
    const Campus = sequelize.define('campus', {
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
        location : {
            type : DataTypes.STRING,
        },
        url : {
            type : DataTypes.STRING,
        },
        desc : {
            type : DataTypes.STRING,
        }
    });
    return Campus;
}
