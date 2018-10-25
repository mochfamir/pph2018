class Controller {
    static renderHome(req, res) {
        res.render('../views/index.ejs')
    }
    static logout(req, res) {
        req.session.destroy(function (err) {
            if (!err) {
                res.redirect('/')
            }
        })
    }
}

module.exports = Controller