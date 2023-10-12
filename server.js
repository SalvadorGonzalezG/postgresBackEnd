// comenzaremos creando nuestra app de express
require('dotenv').config()
const express = require('express')
// mandar llamar en el servidor a homeRoutes y cargo mi archivo de rutas
// y comenzamos a colocar las rutas en ROUTES (ABAJO;)
const homeRoutes = require('./routes/homeRoutes')
const app = express()
// Midrewere hacen cosas en el intermedio de mi app.
app.use(express.urlencoded({ extended: true })) // permite recibir datos especiales (como arrays) para trabajar en el body.
app.use(express.json()) // middleware decimos que trabajamos con json.

// ROUTES.
// RUTA BASE NOTA: esta ruta se añade a la ruta que tengo en homeRoutes
// y dicha ruta quedaria como /api/v1/homes
app.use('/api/v1', homeRoutes)
// lEVANTAR EL SERVIDOR.
app.listen(3000, () => console.log('Server ON: 3000'))
