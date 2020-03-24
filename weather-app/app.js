const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length == 3){
    geocode(process.argv[2], (error, geoData) => {
        if (error) {
            return console.log(error)
        }
        forecast(geoData.latitude, geoData.longtitude, (error, forecastData) => {
            if (error) {
                return console.log('Error:', error)
            } 
            console.log(geoData.location)
            console.log(forecastData)
        })
    })
} else {
    console.log("No input provided!")
}



