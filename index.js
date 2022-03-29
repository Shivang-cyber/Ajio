const express = require('express')

const connect = require('./src/config/db')

const clientController = require('./src/controllers/client .controller')


const app = express()

app.use(express.json())

app.use('/client', clientController)



app.listen(5553, async function () {
  await connect()
  console.log('listening on port ....5553')
})

