const express = require("express")

const userDB = require("../users/users-db")
const restricted = require("../util/authorization")

const router = express.Router()

router.get("/", restricted, async (req, res) => {
  try {
    users = await userDB.getAllUsers()
    if (users.length > 0) res.status(200).json(users)
    else res.status(401).json({ message: "No users found" })
  } catch {
    res
      .status(500)
      .json({ message: "There was a problem fetching users from database" })
  }
})

module.exports = router
