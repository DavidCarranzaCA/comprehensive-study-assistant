const router = require('express').Router()
const userRoutes = require('./users.routes')

module.exports = router

router.use('/api/user-cards', userRoutes)