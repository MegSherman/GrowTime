const bcrypt = require('bcrypt')

module.exports = {
  register: async (req, res) => {
    console.log('Hi, Register!')
    const {
      username,
      password,
      firstName,
      lastName,
      email,
      phone,
      city,
      state,
    } = req.body
    const db = req.app.get('db')

    const existingUser = await db.get_user(username)
    if (existingUser[0]) {
      return res.status(409).send('Username already exists.')
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const newUser = await db.register_user([username, hash])
    console.log(firstName, lastName, email, phone, city, state)
    const newProfile = await db.register_profile([
      firstName,
      lastName,
      email,
      phone,
      city,
      state,
    ])
    console.log(newProfile)
    req.session.user = {
      id: newUser[0].id,
      username: newUser[0].username,
    }
    res.status(200).send(req.session.user)
  },

  login: async (req, res) => {
    console.log('Hi, Login!')
    const { username, password } = req.body
    const db = req.app.get('db')

    const existingUser = await db.get_user(username)
    if (!existingUser[0]) {
      return res.status(404).send('Incorrect username or password.')
    }
    const authenticated = bcrypt.compareSync(password, existingUser[0].hash)
    if (authenticated) {
      req.session.user = {
        id: existingUser[0].id,
        username: existingUser[0].username,
      }
      res.status(200).send(req.session.user)
    } else {
      res.status(404).send('Incorrect username or password.')
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
    console.log('Hi, Logout!')
    req.session.destroy()
    res.sendStatus(200)
  },
}
