const Model = require('../models/index.js')

class Controller {
    static renderLogPage(req, res) {
        res.render('../views/customer/login.ejs')
    }
}

module.exports = Controller