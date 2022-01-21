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
            allowNull : false,
            validate : {
                notEmpty : true,
            }
        },
        imageUrl : {
            type : DataTypes.STRING,
            defaultValue: "https://commonlook.com/wp-content/uploads/2019/05/placeholder.jpg"
        },
        address : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        description : {
            type : DataTypes.STRING,
        }
    });
    return Campus;
}
