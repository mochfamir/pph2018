const express = require('express')
const app = express()
const port = 3000
const home = require('./routes/index.js')
const admin = require('./routes/admin.js')
const session = require('express-session')
const userCustomer = require('./routes/customer_login.js')
const customer = require('./routes/customer')




app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(session({
    secret: 'customer',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))


app.use('/', home)
app.use('/admin', admin)
app.use('/', customer)



app.use('/', userCustomer)

app.listen(port, () => {
    console.log(`Welcome, you're on port ${port}`);
})
