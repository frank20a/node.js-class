const fs = require('fs')

obj = JSON.parse(fs.readFileSync("1-json.json"))
obj.name = 'Frank'
obj.age = 20
obj.planet = 'Saturn'
fs.writeFileSync("1-json.json", JSON.stringify(obj))
