const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
    let alias = 'Genres';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100)
        },
        ranking: {
            type: DataTypes.INTEGER
        },
        active: {
            type: DataTypes.BOOLEAN 
        }
    };
    let config= {
        timestamps:false,
    }
    const genre = sequelize.define(alias, columns,config);
    return genre
}