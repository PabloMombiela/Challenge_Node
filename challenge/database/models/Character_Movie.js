module.exports = (sequelize, DataTypes) => {

    const Character_Movie = sequelize.define("Characters_Movies", {
    //sequelize.define(alias, columnas, config)
    id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    characters_id:{
    type: DataTypes.INTEGER
    },
    movies_id:{
        type:DataTypes.INTEGER
    },
    

    
},
{
        timestamps : false,
}) 





    return Character_Movie;
    }