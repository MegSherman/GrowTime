require('dotenv').config()
const express = require('express'),
  app = express(),
  session = require('express-session'),
  massive = require('massive'),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const authCtrl = require('./authController')
const plantCtrl = require('./plantController')
const middleware = require('./middleware')

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
    secret: SESSION_SECRET,
  })
)
// console.log(authCtrl)
// console.log(app)

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

// console.log(middleware)
// AUTH ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
// app.get("/test", (req, res) => {
//   console.log("test endpoint")
// })
