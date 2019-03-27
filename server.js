const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const authRouter = require("./authentication/auth_router")
const userRouter = require("./users/users_router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use(authRouter)
server.use("/api/users", userRouter)

server.get("/", (req, res) => {
  res.send("Welcome to webauth-I-challenge!")
})

module.exports = server
