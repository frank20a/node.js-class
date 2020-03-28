const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length == 3){
    geocode(process.argv[2], (error, {latitude, longtitude, location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longtitude, (error, forecastData) => {
            if (error) {
                return console.log('Error:', error)
            } 
            console.log(location)
            console.log(forecastData)
        })
    })
} else {
    console.log("No input provided!")
}



