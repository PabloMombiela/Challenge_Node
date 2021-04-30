const db = require("../../database/models")



let charactersApiController = {


    
        list (req, res, next) {

            db.Characters.findAll({
                attributes: [ "name", "avatar"]
            }).then(function (Characters) {
                
                res.render("listCharacters", {Characters:Characters})
                
                  
                });
                 
                
                
    
                
        },

    detail:(req,res) => {

        res.send('{name: mickey, age:30 años, weight: 70kg}')
    },  

    create: (req, res) => {

        res.send( 'Create character')
    }
    










}
module.exports = charactersApiController