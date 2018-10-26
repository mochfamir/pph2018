const express = require('express');
const router = express.Router();
const Controller = require('../controllers/regsiterController')

router.get('/register', Controller.renderCustomerRegister)
router.post('/register', Controller.postCustomerRegister)

module.exports = router
