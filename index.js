const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 4040

const Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: 'b83f1615464d46c2962c25243035c8c8',
    captureUncaught: true,
    captureUnhandledRejections: true
  })

app.use(express())

app.get('/', (req, res) => {
    rollbar.log('hello world!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port, () => console.log(`Oh no, ${port} is running away!`))