const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const authRouter = require("./authentication/auth_router")
const userRouter = require("./users/users_router")
const restricted = require("./util/authorization")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use("/api/restricted", restricted)
server.use("/api/restricted/users", userRouter)
server.use(authRouter)

server.get("/", (req, res) => {
  res.send("Welcome to webauth-I-challenge!")
})

module.exports = server
