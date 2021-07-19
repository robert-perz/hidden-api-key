require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const qs = require('qs')

const url = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = process.env.API_KEY

app.get('/', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')

  let query = request.query
  query.appid = apiKey

  let queryString = qs.stringify(query)

  axios(`${url}?${queryString}`).then(res => {
    try {
      response.send(res.data)
    }
    catch {
      alert('Something went wrong.Try again.')
    }
  })
})
app.listen(port, () => console.log(`App is listening at ${port}`))
