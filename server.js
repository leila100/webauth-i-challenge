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
      secure: false, // only set cookies over https. if true, Server will not send back a cookie over http.
      httpOnly: false // don't let JS code access cookies. Browser extensions run JS code on your browser!
    },
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

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-PINGOTHER"
  )
  res.header("Access-Control-Allow-Credentials", true)
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  )
  next()
})

server.use(helmet())
server.use(express.json())
// server.use(cors())

const origin = "http://localhost:3000"
server.use(
  cors({
    credentials: true,
    origin
  })
)

server.use("/api/users", restricted, userRouter)
server.use(authRouter)

server.get("/", (req, res) => {
  res.send("Welcome to webauth-I-challenge!")
})

module.exports = server
