const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.redirect('/home')
})

routes.get('/home', (req, res) => {
    return res.render('index')
})

routes.use((req, res) => {
    return res.status(404).render('not-found')
})

module.exports = routes