const express = require("express")
const bcrypt = require("bcryptjs")

const userDB = require("../users/users-db")

const router = express.Router()

router.post("/api/register", async (req, res) => {
  const { username, password } = req.body
  if (!username || !password)
    res.status(400).json({ message: "Please Provide a Username and Password" })
  else {
    const hash = bcrypt.hashSync(password, 15)
    try {
      user = await userDB.addUser({ username, password: hash })
      if (user) {
        res.status(201).json(user)
      } else res.status(401).json({ message: "Invalid Credentials" })
    } catch {
      res.status(500).json({ message: "Ran into an unexpected error" })
    }
  }
})

router.post("/api/login", async (req, res) => {
  let { username, password } = req.body

  if (!username || !password)
    res.status(400).json({ message: "Please Provide a Username and Password" })
  else {
    try {
      user = await userDB.findBy({ username }).first()
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user // storing the logged in user in the session
        res.status(200).json({ message: `Welcome ${user.username}!` })
      } else {
        res.status(401).json({ message: "Invalid Credentials" })
      }
    } catch (error) {
      res.status(500).json({ message: "Can't login" })
    }
  }
})

router.get("/api/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send({ message: "error logging out" })
      } else {
        res.send({ message: "good bye" })
      }
    })
  }
})

module.exports = router
