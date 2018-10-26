const express = require('express')
const router = express.Router()
const Controller = require('../controllers/adminController.js')
const isLogin = require('../middleware/isLoginAdmin.js')



router.get('/', isLogin, Controller.renderHomePage)
router.get('/login', Controller.renderLogPage)
router.post('/login', Controller.postLogPage)
router.get('/food', Controller.renderFoodList)
router.get('/add-food', isLogin, Controller.renderAddFood)
router.post('/add-food', isLogin, Controller.postAddFood)
router.get('/customers', isLogin, Controller.renderCustomerList)
router.get('/edit-food/:foodId', isLogin, Controller.renderEditFood)
router.post('/edit-food/:foodId', isLogin, Controller.postEditFood)
router.get('/delete-food/:foodId', isLogin, Controller.renderDeleteFood)
router.get('/edit-customer/:customerId', isLogin, Controller.renderEditCustomer)
router.post('/edit-customer/:customerId', isLogin, Controller.postEditCustomer)





module.exports = router
