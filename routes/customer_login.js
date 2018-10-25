const express = require('express');
const router = express.Router();
const Controller = require('../controllers/regsiterController')

router.get('/register', (req,res) => {
    //res.send('masuk')
    res.render('register')
})
router.post('/register', Controller.postCustomerRegister)

module.exports = router
