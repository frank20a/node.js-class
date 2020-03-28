const https = require("https")

const url = 'https://api.darksky.net/forecast/53bdbaf513728b399b3e81f7fb59e317/40,-75?units=si'

const request = https.request(url, (response) => {
    let data = []

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        console.log(JSON.parse(data))
    })

})

request.on('error', (error) => {
    console.log(error)
})

request.end()