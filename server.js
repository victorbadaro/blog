const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.redirect('/home')
})

app.get('/home', (req, res) => {
    return res.send('Página inicial')
})

app.listen(3000, () => {
    console.log('Server is running!\nPort number: 3000')
})