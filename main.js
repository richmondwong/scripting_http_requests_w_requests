var request = require('request');
var fs = require('fs')

var locationToGo = 'https://sytantris.github.io/http-examples/future.jpg'

request.get(locationToGo)
.on('error', function (error) {throw error})
.on('response', function (responseMessage) {
  console.log(responseMessage)
})
.pipe(fs.createWriteStream('./future.jpg'))