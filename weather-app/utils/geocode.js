const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +  encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZnJhbmsyMGEiLCJhIjoiY2s4NW9td3F2MDVtNTNmdGM3dXdmem12diJ9.EoXxZkkbdY-13coui-7mHg&limit=1'
    
    request({ url: url, json: true }, (error, response) => {
        if (error){
            callback ('Unable to connect to geolocation services', undefined)
        } else if (response.body.features.length == 0) {
            callback ('Location not found', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longtitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode