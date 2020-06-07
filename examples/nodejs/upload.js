const request = require('request')
const fs = require('fs')

const apiKey = 'your_api_key'
const options = {
  method: 'POST',
  url: 'https://file.coffee/api/v1/upload?key=' + apiKey,
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  formData: {
    file: {
      value: fs.createReadStream('your_file')
    }
  }
}
request(options, function (error, response) {
  if (error) throw new Error(error)
  console.log(response.body)
})
