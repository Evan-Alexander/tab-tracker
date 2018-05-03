const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
// Morgan is an NPM package for logging messages to the console
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Defines established routes and the methods within them
require('./routes')(app)

// Use sequelize as the ORM for sQlite
sequelize.sync({force: true})
  .then(() => {
    app.listen(config.port || 8081)
    console.log(`Server started on ${config.port}`)
  })
