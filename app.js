const express = require('express')
const app = express()
const port = 3000

const userCustomer = require('./routes/customer_login.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))


app.use('/', userCustomer)

app.listen(port, () => {
    console.log(`Welcome, you're on port ${port}`);
})
