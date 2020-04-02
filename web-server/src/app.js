const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
    if(!req.query.address){
        return res.send({
            error: "No address provided"
        })
    }

    geocode(req.query.address, (error, {latitude, longtitude, location} = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longtitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            } 
            res.send({
                address: req.query.address,
                location,
                forecast: forecastData
            })
        })
    })

    
})

app.get('/products', (req, res) => {
    if (!req.query.search){
        return res.send({
            error:"NO SEARCH QUERY PROVIDED!"
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
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