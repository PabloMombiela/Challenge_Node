module.exports = (sequelize, DataTypes) => {

    const Character = sequelize.define("Characters", {
    //sequelize.define(alias, columnas, config)
    id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    name:{
    type: DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER
    },
    weight:{
        type:DataTypes.INTEGER
    },
    story:{
       type: DataTypes.STRING
    },
    avatar:{
        type:DataTypes.STRING
    },

    
},
{
        timestamps : false,
}) 

Character.associate = function(models){
    Character.belongsToMany(models.Characters,{
//alias, mediante, FK, otra key, timestamps//
       as:"characters" ,
       through: "characters_movies",
       foreingKey:"characters_id", 
       otherKey:"movies_id",
       timestamps: false
    })
}


    return Character;
    }