const express = require('express')
var mongoose = require('mongoose');
var cors = require('cors');
const port = 3000

const user = require('./routes/user-routs')
const expenses = require('./routes/expenses-routs')

mongoose.connect("mongodb://localhost:27017/expensez", { 
    useNewUrlParser: true }).then(() => {

    const bodyPaser = require('body-parser')
    const app = express()

    app.use(bodyPaser.json())
    app.use(bodyPaser.urlencoded({extends:true}))

    app.use('/user', user)
    app.use('/expenses', expenses)

    app.use(cors())

  app.listen(port, () => {
    console.log(`Expensez Server Started..`)
  })
});