const db = require("../data/dbConfig")

module.exports = {
  addUser,
  findById,
  findBy,
  getAllUsers
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

function findBy(filter) {
  return db("users").where(filter)
}

function getAllUsers() {
  return db("users")
}
