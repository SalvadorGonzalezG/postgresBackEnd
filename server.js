// comenzaremos creando nuestra app de express
const express = require('express')
const app = express()
// Midrewere hacen cosas en el intermedio de mi app.
app.use(express.urlencoded({ extended: true })) // permite recibir datos especiales (como arrays) para trabajar en el body.
app.use(express.json()) // middleware decimos que trabajamos con json.

// ROUTES.
// lEVANTAR EL SERVIDOR.
app.listen(3000, () => console.log('Server ON: 3000'))
