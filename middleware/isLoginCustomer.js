function isLoginCustomer (req,res,next){
    if(req.session.user.role === 'Admin') {
        return next()
    } else {
        res.render('../views/error', {
            error: 'Please login as Customer'
        })
    }
}

module.exports = isLoginCustomer