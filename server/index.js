require("dotenv").config()
const express = require("express"),
  session = require("express-session"),
  massive = require("massive"),
  authCtrl = "./authController",
  plantCtrl = "./plantController",
  middleware = "./middleware",
  app = express(),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
  })
)

// AUTH ENDPOINTS
// app.post("/auth/register", middleware.checkEmail, authCtrl.register)
// app.post("/auth/login", authCtrl.login)
// app.delete("/auth/logout", authCtrl.logout)

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db)
    console.log("DB growing strong.")
    app.listen(SERVER_PORT, () =>
      console.log(`It's GrowTime on port ${SERVER_PORT}.`)
    )
  })
  .catch(console.log("DB is DBroken. :("))
