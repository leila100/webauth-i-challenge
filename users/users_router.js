const express = require("express")
const bcrypt = require("bcryptjs")

const userDB = require("../users/users-db")

const router = express.Router()

router.post("/api/register", async (req, res) => {
  const { username, password } = req.body
  if (!username || !password)
    res.status(400).json({ message: "No credentials provided" })
  else {
    const hash = bcrypt.hashSync(password, 15)
    try {
      user = await userDB.addUser({ username, password: hash })
      if (user) res.status(201).json(user)
      else res.status(500).json({ message: "Invalid Credentials" })
    } catch {
      res.status(500).json({ message: "Ran into an unexpected error" })
    }
  }
})

module.exports = router
