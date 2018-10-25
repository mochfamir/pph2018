const router = require('express').Router()
const Controller = require('../controllers/indexController.js')

router.get('/', Controller.logout)

module.exports = router