const bcrypt = require("bcrypt")

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body
    const db = req.app.get("db")

    const existingUser = await db.get_user_by_username(username)
    if (existingUser[0]) {
      return res.status(409).send("Username already exists.")
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const newUser = await db.register_user([username, hash])
    req.session.user = {
      userId: newUser[0].id,
      username: newUser[0].username,
    }
    res.status(200).send(req.session.user)

    // req.session.user = newUser[0]
    // delete req.session.user.password
    // res.status(200).send(req.session.user)
  },

  login: async (req, res) => {
    const { username, password } = req.body
    const db = req.app.get("db")

    const existingUser = await db.get_user_by_username(username)
    if (!existingUser[0]) {
      return res.status(404).send("Incorrect username or password.")
    }
    const authenticated = bcrypt.compareSync(password, existingUser[0].hash)
    if (authenticated) {
      req.session.user = {
        userId: user[0].id,
        username: user[0].username,
      }
      res.status(200).send(req.session.user)
    } else {
      res.status(403).send("Incorrect username or password.")
    }
  },

  // if (!authenticated) {
  //     return res.status(404).send ('Incorrect username or password.')
  // }
  // delete existingUser[0].hash
  // req.session.user = existingUser[0]
  // res.status(200).send(req.session.user)
  // },

  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },
}
