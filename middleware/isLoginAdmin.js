function isLoginAdmin (req,res,next){
    if(req.session.user) {
        if(req.session.user.role === 'Admin') {
            return next()
        }
    } else {
        res.render('../views/error', {
            error: 'Please login as Admin'
        })
    }
}

module.exports = isLoginAdmin