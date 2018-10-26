const userCustomer = require('../models/index').User;
class Register {
    static renderCustomerRegister(req, res) {
        res.render('register')
    }

    static postCustomerRegister(req,res) {
        userCustomer.create({
            name: req.body.name,
            password: req.body.password,
            Email: req.body.email
        })
        .then(() => {
            res.render('../views/registerSuccess.ejs');
        })
        .catch((err) => {
            res.send(err.message);
        })
    }
    // static postCustomerRegister(req, res) {
    //     const crypto = require('crypto')
    //     const salt = crypto.randomBytes(256).toString('hex')
    //     const hash = crypto.createHmac('sha256', salt)
    //         .update('Admin')
    //         .digest('hex')
    //     userCustomer.create({
    //         name: req.body.name,
    //         password: hash,
    //         Email: req.body.email,
    //         salt: salt
    //     })
    //         .then(() => {
    //             res.render('../views/registerSuccess.ejs');
    //         })
    //         .catch((err) => {
    //             res.send(err.message);
    //         })
    // }
    
}

module.exports = Register
