const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/53bdbaf513728b399b3e81f7fb59e317/' + 
        lat + ',' + long + '?units=si'
    request( { url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.code) {
            callback("Weather service error: " + body.error, undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 
                " It is currently " + 
                body.currently.temperature +
                " degrees with a "+
                body.currently.precipProbability*100 +
                "% chance of rain!")
        }
    })
}

module.exports = forecast