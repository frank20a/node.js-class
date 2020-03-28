const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Frank Fourlas'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: "Frank Fourlas"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: "This is a message by Frank. You're awesome!"
    })
})

app.get('/weather', (req, res) => {
    res.send({forecast: 'Clear', location: 'Athens'})
})

// app.get('/help')             //app.com/help

app.listen(3000, () => {
    console.log("Server running on port 3000.")
})