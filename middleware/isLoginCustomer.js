function isLoginCustomer(req, res, next) {
    if (req.session.user) {
        if (req.session.user.role === 'Customer') {
            return next()
        }
    } else {
        res.render('../views/error', {
            error: 'Please login as Customer'
        })
    }
}

module.exports = isLoginCustomer