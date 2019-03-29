const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const session = require("express-session")
const knexSessionStore = require("connect-session-knex")(session)

const authRouter = require("./authentication/auth_router")
const userRouter = require("./users/users_router")
const restricted = require("./util/authorization")

const server = express()

server.use(
  session({
    name: "webauth", // default is connect.sid
    secret: "This is a secret!",
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds
      secure: false // only set cookies over https. if true, Server will not send back a cookie over http.
    },
    httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    resave: false,
    saveUninitialized: false,

    store: new knexSessionStore({
      knex: require("./data/dbConfig.js"),
      tablename: "sessions",
      sidfieldname: "sid",
      createtable: true,
      clearInterval: 1000 * 60 * 60
    })
  })
)
server.use(helmet())
server.use(express.json())
server.use(cors())

server.use("/api/users", restricted, userRouter)
server.use(authRouter)

server.get("/", (req, res) => {
  res.send("Welcome to webauth-I-challenge!")
})

module.exports = server
