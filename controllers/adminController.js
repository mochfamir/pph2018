const Model = require('../models/index.js')

class Controller {
    static renderHomePage(req, res) {
        res.render('../views/admin/index.ejs')
    }
    static renderLogPage(req, res) {
        res.render('../views/admin/login.ejs')
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
        

    }

}

module.exports = Controller