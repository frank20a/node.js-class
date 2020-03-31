const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//setup views engine and path
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

//setup static directory
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
        msg: "This is a message by Frank. You're awesome!",
        title: "Help",
        name: "Frank Fourlas"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        error: '404 - Help',
        title: 'Help page not found',
        name: 'Frank Fourlas'
    })
})

app.get('/weather', (req, res) => {
    res.send({forecast: 'Clear', location: 'Athens'})
})

app.get('*', (req, res) => {
    res.render('404', {
        error: 'Page not found',
        title: '404',
        name: 'Frank Fourlas'
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000.")
})