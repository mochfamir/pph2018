const Model = require('../models/index.js')
const crypto = require('crypto')

class Controller {
    static renderHomePage(req, res) {
        res.render('../views/admin/index.ejs')
    }
    static renderLogPage(req, res) {
        res.render('../views/admin/login.ejs')
    }
    static postLogPage (req, res) {
        let salt=''
        let userId = ''
        Model.User.findOne({where:{
            Email: req.body.email,
            // password: req.body.password,
            role: 'Admin'
        }})
        .then(result => {                                   
            userId = result.id
            salt = result.salt
            let hashedPassword = crypto.createHmac('sha256', salt)
                                 .update(req.body.password)
                                .digest('hex')
            return Model.User.findOne({where:{
                id: userId,
                password: hashedPassword
            }})
        })
        .then(data => {
            if(!data) {
                res.render('../views/error.ejs', {
                    error: 'Please make sure that the account is an Admin and check your email and password'
                })
            } else {
                req.session.user = {
                    email: req.body.email,
                    role: 'Admin'
                }
                res.render('../views/admin/index.ejs')
            }
        })
        .catch(err => {
            res.render('../views/error.ejs', {
                error: err.message
            })
        })

    }
    static renderFoodList(req, res) {
        Model.Food.findAll()
          .then((data) => {
            res.render('../views/admin/foodList.ejs', {
                data: data
            })
          })
          .catch((err) => {
              res.render('../views/error.ejs', {
                  error: err
              })
          })
    }
    static renderAddFood(req, res) {
        Model.Category.findAll()
        .then(category => {
            res.render('../views/admin/addFood.ejs', {
                category:category
            })
          })
          .catch((err) => {
              res.render('../views/error.ejs', {
                  error: err
              })
          })
    }
    static postAddFood(req, res) {
        Model.Food.create({
            name: req.body.name,
            price:req.body.price,
            category: req.body.category
        })
        .then(data => {
            res.redirect('/admin/food')
          })
          .catch((err) => {
              res.render('../views/error.ejs', {
                  error: err
              })
          })
    }
    static renderCustomerList(req, res) {
        Model.User.findAll({where:{
            role: 'Customer'
        }})
        .then((data) => {
            res.render('../views/admin/customerList.ejs', {
                data: data
            })
          })
          .catch((err) => {
              res.render('../views/error.ejs', {
                  error: err
              })
          })
    }
    static renderEditFood(req, res) {
        let foodData=''
        Model.Food.findById(req.params.foodId)
        .then((data) => {
            foodData = data
            return Model.Category.findAll()
          })
          .then(category => {
            res.render('../views/admin/editFood.ejs', {
                data: foodData,
                category:category
            })
          })
          .catch((err) => {
              res.render('../views/error.ejs', {
                  error: err
              })
          })
    }
    static postEditFood(req, res) {
        Model.Food.update({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        },{where: {
            id: req.params.foodId
        }})
        .then(data => {
            res.redirect('/admin/food')
          })
          .catch((err) => {
              res.render('../views/error.ejs', {
                  error: err
              })
          })
    }
    static renderDeleteFood(req, res) {
        Model.Food.destroy({where:{
            id: req.params.foodId
        }})
        .then(data => {
            res.redirect('/admin/food')
          })
          .catch((err) => {
              res.render('../views/error.ejs', {
                  error: err
              })
          })
    }   
    static renderEditCustomer(req, res) {
        Model.User.findById(req.params.customerId)
        .then((data) => {
            res.render('../views/admin/editCustomer.ejs', {
                data: data
            })
          })
        .catch((err) => {
              res.render('../views/error.ejs', {
                  error: err
              })
          })
    }
    static postEditCustomer(req, res) {
        Model.User.update({
            name: req.body.name,
            Email: req.body.email,
        },{where: {
            id: req.params.customerId
        }})
        .then(data => {
            res.redirect('/admin/customers')
          })
          .catch((err) => {
              res.render('../views/error.ejs', {
                  error: err
              })
          })
    }
}

module.exports = Controller