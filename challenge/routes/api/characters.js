let express = require ('express')
let router = express.Router()
let charactersApiController = require ('../../controllers/api/charactersController')



router.get('/', charactersApiController.list)
router.get('/create', charactersApiController.create)
router.get('/:id', charactersApiController.detail)


module.exports = router