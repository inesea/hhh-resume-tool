const express = require('express')
const cors = require('cors')

const generatePdf = require('./generatePdf')

const app = express()
const PORT = 5052
const HOST = '0.0.0.0'

const corsOptions = {
  origin: 'http://localhost:1234',
  optionsSuccessStatus: 200
}

app.get('/pdf', cors(corsOptions), (req, res) => {
  generatePdf()
    .then(result => {
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Length': result.length
      })
      res.status(200)
      res.send(result)
    })
    .catch(error => {
      res.status(400).json({ message: error.message })
    })
})

app.listen(PORT, HOST, function() {
  console.log(`PDF Generator running on http://${HOST}:${PORT}`)
})
