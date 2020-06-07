const request = require('request')
const options = {
  method: 'GET',
  url: 'https://file.coffee/api/v1/information'
}
request(options, function (error, response) {
  if (error) throw new Error(error)
  console.log(response.body)
})
