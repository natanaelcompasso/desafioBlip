require('dotenv').config()
const express = require('express')
const cors = require('cors')


const apiRoutes = require('./src/routes')

const server = express()

server.use(apiRoutes)
server.use(cors())
server.listen(process.env.PORT, ()=>{
    console.log(` - Rodando no endereço: ${process.env.BASE}`)
})


