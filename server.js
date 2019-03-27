const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const userRouter = require("./users/users_router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use(userRouter)

server.get("/", (req, res) => {
  res.send("Welcome to webauth-I-challenge!")
})

module.exports = server
