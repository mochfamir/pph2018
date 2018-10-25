const router = require('express').Router()
const Controller = require('../controllers/indexController.js')

router.get('/', Controller.renderHome)

module.exports = router