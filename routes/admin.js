const router = require('express').Router()
const Controller = require('../controllers/adminController.js')

router.get('/', Controller.renderHomePage)
router.get('/login', Controller.renderLogPage)
router.get('/food', Controller.renderFoodList)
router.get('/add-food', Controller.renderAddFood)



module.exports = router
