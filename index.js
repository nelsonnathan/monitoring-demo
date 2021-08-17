const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 4040

app.use(express())

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))

app.listen(port, () => console.log(`Oh no, ${port} is running away!`))