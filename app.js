const express = require('express')
const app = express()
const port = 3000
const home = require('./routes/index.js')
const admin = require('./routes/admin.js')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.use('/', home)
app.use('/admin', admin)



app.listen(port, () => {
    console.log(`Welcome, you're on port ${port}`);
})
