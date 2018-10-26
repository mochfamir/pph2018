const express = require('express');
const router = express.Router();
const Food = require('../models/index').Food;
const Food_Users = require('../models/index').Food_Users;
const User = require('../models/index').User;
const Controller = require('../controllers/customerController')
const isLogin = require('../middleware/isLoginCustomer')
const currency = require('../helpers/currency')

router.get('/login', Controller.renderLogPage)
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            Email: req.body.email,
            password: req.body.password
        }
    })
        .then((data) => {
            if (data) {
                req.session.user = {
                    id: data.id,
                    email: data.Email,
                    role: "Customer"
                }
                res.redirect('food/list')
            }
            else {
                res.render('../views/error.ejs', {
                    error: "Please try again"
                })
            }
        })

})



// list foods
router.get('/food/list', isLogin, (req, res) => {
    Food.findAll()
        .then((food) => {
            //res.render('customer/food_list', {data:food, chart:chart})
            return food
        })
        .then((food) => {
            Food_Users.findAll({
                include: [{ model: Food }]
            }, {
                    where: {
                        UserId: Number(req.session.user.id)
                    }
                })
                .then((chart) => {
                    //res.send(chart)
                    console.log(req.session.user)
                    res.render('customer/food_list', { data: food, chart: chart, session: req.session.user, currency: currency })
                })
        })
        .catch((err) => {
            res.send(err.message)
        })
})
// order foods
router.post('/food/list/:foodId', isLogin, (req, res) => {
    Food_Users.create({
        UserId: Number(req.session.user.id), //dari session
        FoodId: Number(req.params.foodId), // baca dari chart
        quantity: Number(req.body.quantity)
    })
        .then(() => {
            //req.session.
            res.redirect('/customer/food/list')
        })
        .catch(err => {
            res.send(err)
        })
})

// cancel order
router.get('/food/list/:id/:qty', isLogin, (req, res) => {
    Food_Users.destroy({
        where: {
            FoodId: req.params.id,
            UserId: req.session.user.id,
            quantity: req.params.qty
        }
    })
        .then(() => {
            res.redirect('/customer/food/list')
        })
        .catch(err => {
            res.send(err.message)
        })
})
router.get('/checkout', isLogin, (req, res) => {
    Food_Users.findAll({
        include: [{ model: Food }]
    }, {
            where: {
                UserId: Number(req.session.user.id)
            }
        })
        .then((chart) => {
            //res.send(chart)
            console.log(req.session.user)
            res.render('customer/checkout', { chart: chart, session: req.session.user, currency: currency })
        })
})

router.get('/payment', isLogin, (req, res) => {
    Food_Users.findAll()
    .then((data) => {
        res.send(data)
    })
    // Food_Users.destroy({
    //     where: {
    //         UserId: req.session.user.id}
    // })
    //     .then(() => {
    //         res.redirect('/')
    //     })
    //     .catch(err => {
    //         res.send(err.message)
    //     })

})


module.exports = router











// update update 
// router.post("/customer/food/list/<%=food.id%>", (req, res) => {
//     Food_Users.update({
//         quantity: Number(req.body.quantity)
//     }, {
//             where: {
//                 id: Number(req.params.foodId.slice(1))
//             }
//         })
//         .then(() => {
//             res.redirect('/food/list')
//         })
//         .catch(err => {
//             res.send(err.message)
//         })
// })