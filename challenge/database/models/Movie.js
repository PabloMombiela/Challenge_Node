module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define("Movies", {
    //sequelize.define(alias, columnas, config)
    id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    title:{
    type: DataTypes.STRING
    },
    release:{
        type:DataTypes.INTEGER
    },
    raiting:{
        type:DataTypes.INTEGER
    },
    gender:{
       type: DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    },

    
},
{
        timestamps : false,
}) 

Movie.associate = function(models){
    Movie.belongsToMany(models.Characters,{
//alias, mediante, FK, otra key, timestamps//
       as:"movies" ,
       through: "characters_movies",
       foreingKey:"movies_id", 
       otherKey:"characters_id",
       timestamps: false
    })
}

    return Movie;
    }