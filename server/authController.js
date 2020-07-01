const bcrypt = require('bcrypt')
require('dotenv').config()
const { PHONE_NUMBER, NODEMAILER_EMAIL } = process.env

module.exports = {
  register: async (req, res) => {
    // console.log('Hi, Register!')
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
    const transporter = req.app.get('transporter')
    const twilio = req.app.get('twilio')

    const existingEmail = await db.check_email(email)
    if (existingEmail[0]) {
      return res.status(409).send('User email already exists.')
    }
    const existingUsername = await db.check_username(username)
    if (existingUsername[0]) {
      return res.status(409).send('Username already exists.')
    }
    try {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)
      const newUser = await db.register_user([username, hash])
      // .then()
      // .catch(() => res.status(500).send('Could not register user.'))
      // console.log(newUser)
      const user_id = newUser[0].id
      // console.log(firstName, lastName, email, phone, city, state)
      const newProfile = await db.register_profile([
        user_id,
        firstName,
        lastName,
        email,
        phone,
        city,
        state,
      ])
      // console.log(newProfile)
      if (newProfile) {
        const verifiedUser = await db.verified_user(username)
        req.session.user = verifiedUser[0]
        console.log(verifiedUser)
      }

      // NODEMAILER
      const mailOptions = {
        from: NODEMAILER_EMAIL,
        to: email,
        subject: 'Thanks for Registering!',
        text:
          'Thank you for registering your account with us, check out all the features of our website and enjoy your stay.',
        html: '',
      }
      transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
          console.log('Nodemailer welcome email failed to send.')
        } else {
          console.log('Nodemailer welcome email sent.')
        }
      })

      // TWILIO
      twilio.messages
        .create({
          body: 'Welcome to GrowTime!',
          from: PHONE_NUMBER,
          to: phone,
        })
        .then((message) => {
          console.log(`Twilio welcome text sent to ${phone}`)
          console.log(message.body)
        })
        .catch((error) => console.log('Twilio welcome text failed to send.'))

      res.status(200).send(req.session.user)
    } catch (error) {
      return res.status(500).send('Could not register user.')
    }
  },

  login: async (req, res) => {
    // console.log('Hi, authCtrl.login!')
    const { username, password } = req.body
    const db = req.app.get('db')

    const existingUser = await db.check_username(username)
    if (!existingUser[0]) {
      return res.status(404).send('Incorrect username or password.')
    }
    const authenticated = bcrypt.compareSync(password, existingUser[0].password)
    if (authenticated) {
      const verifiedUser = await db.verified_user(username)
      req.session.user = verifiedUser[0]
      console.log(req.session.user)
      res.status(200).send(req.session.user)
    } else {
      res.status(404).send('Incorrect username or password.')
    }
  },

  getUser: async (req, res) => {
    // if (req?.session?.user) {
    //   return res.status(200).send(req.session.user)
    if (req && req.session && req.session.user) {
      // console.log('Session sent.')
      return res.status(200).send(req.session.user)
    }
    res.status(404).send('Please login first.')
  },

  logout: (req, res) => {
    console.log('Hi, authCtrl.logout!')
    req.session.destroy()
    res.sendStatus(200)
  },
}
