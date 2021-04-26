const charactersApiController = {


    list: (req, res) => {
        res.send('mickey, donald, pluto');


    },

    detail:(req,res) => {

        res.send('{name: mickey, age:30 años, weight: 70kg}')
    },  

    create: (req, res) => {

        res.send( 'Create charracter')
    }
    










}
module.exports = charactersApiController