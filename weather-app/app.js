const request = require('request')

// const url ='https://api.darksky.net/forecast/53bdbaf513728b399b3e81f7fb59e317/37.8267,-122.4233?units=si'

// request({ url: url, json: true }, (error, response) => {
//     if (error){
//         console.log("Unable to connect to weather service!")
//     } else if (response.body.code) {
//         console.log("Weather service error: " + response.body.error)
//     } else {
//         console.log( response.body.daily.data[0].summary + 
//             " It is currently " + 
//             response.body.currently.temperature +
//             " degrees with a "+
//             response.body.currently.precipProbability*100 +
//             "% chance of percipitation!"
//         )
//     }
// })

const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZnJhbmsyMGEiLCJhIjoiY2s4NW9td3F2MDVtNTNmdGM3dXdmem12diJ9.EoXxZkkbdY-13coui-7mHg&limit=1'

request({ url: urlGeo, json: true}, (error, response) => {
    //lat [1] long [0]
    if (error){
        console.log("Unable to connect to geocoding service")
    } else if (response.body.message) {
        console.log("Weather service error: " + response.body.message)
    } else if (response.body.features.length == 0) {
        console.log("Location not found")
    } else {
        console.log(response.body.features[0].center )
    }
})