const router = require('express').Router()
const userController = require('../controllers/users.controller')

module.exports = router


router.get('/', userController.getAll)
router.post('/',userController.create)
router.put('/:id([0-9a-fA-F]{24})',userController.update)
router.delete('/:id([0-9a-fA-F]{24})', userController.delete)