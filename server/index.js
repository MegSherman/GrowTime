require ('dotenv').config()
const express = require ('express'),
    massive = require ('massive'),
    authCtrl = ('./authController'),
    plantCtrl = ('./plantController'),
    app = express(),
    {SERVER_PORT, CONNECTION_STRING} = process.env

app.use (express.json())

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then (db => {
    app.set ('db', db)
    console.log ('DB growing strong.')
    app.listen (SERVER_PORT, () =>
    console.log (`It's GrowTime on port ${SERVER_PORT}.`))
}).catch (console.log ('DB is DBroken. :('))

