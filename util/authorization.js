const bcrypt = require("bcryptjs")

const userDB = require("../users/users-db")

module.exports = async function restricted(req, res, next) {
  const { username, password } = req.headers
  if (!username || !password) {
    res
      .status(400)
      .json({ message: "No credentials provided - You shall not pass!." })
  } else {
    try {
      user = await userDB.findBy({ username }).first()
      if (user && bcrypt.compareSync(password, user.password)) next()
      else
        res
          .status(401)
          .json({ message: "Invalid Credentials - You shall not pass!." })
    } catch {
      res.status(500).json({ message: "Ran into an unexpected error" })
    }
  }
}
