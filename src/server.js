const express = require('express')
const dotenv  = require('dotenv')
const apiroutes = require('./routes/api')
const cors = require('cors')

dotenv.config()

const server = express()
server.use(cors())


server.use(express.json())
server.use(apiroutes)

server.use((req, res)=>{
res.status(404)
res.json({error: 'ERROR 404'})
})

server.listen(process.env.PORT)