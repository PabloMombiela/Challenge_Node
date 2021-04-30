let express = require ('express')
let router = express.Router()
let charactersApiController = require ('../../controllers/api/charactersController')



router.get('/list', charactersApiController.list)
router.get('/', charactersApiController.create)
router.get('/:id', charactersApiController.detail)


module.exports = router