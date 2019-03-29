const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const session = require("express-session")

const authRouter = require("./authentication/auth_router")
const userRouter = require("./users/users_router")
const restricted = require("./util/authorization")

const server = express()

server.use(
  session({
    name: "webauth", // default is connect.sid
    secret: "nobody tosses a dwarf!",
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds
      secure: true // only set cookies over https. Server will not send back a cookie over http.
    },
    httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    resave: false,
    saveUninitialized: false
  })
)
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
