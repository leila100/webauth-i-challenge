const db = require("../data/dbConfig")

module.exports = {
  addUser,
  findById
}

async function addUser(user) {
  const [id] = await db("users").insert(user)

  return findById(id)
}

function findById(id) {
  return db("users")
    .where({ id })
    .first()
}
