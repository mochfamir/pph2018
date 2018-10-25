const userCustomer = require('../models/index').User;
class Register {
    static renderCustomerRegister(req,res) {
        res.render()
    }
    
    static postCustomerRegister(req,res) {
        userCustomer.create({
            name: req.body.name,
            password: req.body.password,
            Email: req.body.email
        })
        //then catch
        .then(() => {
            res.redirect('/register');
        })
        .catch((err) => {
            res.send(err.message);
        })
        //res.send(req.body)
    }
}

module.exports = Register
