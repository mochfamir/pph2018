function isLogin (req,res,next){
    if(req.session.user) {
        return next()
    } else {
        res.render('../views/error', {
            error: 'Please login as an Admin to access this page'
        })
    }
}

module.exports = isLogin