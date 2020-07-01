require('dotenv').config()
const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    TWILIO_TEST_SID,
    TWILIO_AUTHTOKEN,
    PHONE_NUMBER,
    NODEMAILER_EMAIL,
    NODEMAILER_PASSWORD,
  } = process.env,
  express = require('express'),
  app = express(),
  session = require('express-session'),
  massive = require('massive')

const authCtrl = require('./authController')
const plantCtrl = require('./plantController')
const nodemailer = require('nodemailer')
const twilio = require('twilio')(TWILIO_TEST_SID, TWILIO_AUTHTOKEN)
// const middleware = require('./middleware')

app.use(express.static(`${__dirname}/../build`))
app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
    secret: SESSION_SECRET,
  })
)

// NODEMAILER TRANSPORTER
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASSWORD,
  },
})
app.set('transporter', transporter)

// TWILIO LOGIC
app.set('twilio', twilio)

// console.log(authCtrl)
// console.log(app)
// console.log(middleware)

// AUTH ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('./auth/getUser', authCtrl.getUser)
// app.get("/test", (req, res) => {
//   console.log("test endpoint")
// })

// PLANT ENDPOINTS
app.get('/api/unselectedplants', plantCtrl.getUnselectedPlants)
app.put('/api/selectplant/:plantid', plantCtrl.selectPlant)

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set('db', db)
    console.log('DB growing strong.')
    app.listen(SERVER_PORT, () =>
      console.log(`It's GrowTime on port ${SERVER_PORT}.`)
    )
  })
  .catch(console.log('DB is DBroken. :('))
