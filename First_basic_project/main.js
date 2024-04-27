// Basic Command to Create Server

require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fb', (req, res) => (res.send(`<h2>Hello! This page belongs to FaceBook</h2>`)))

app.get('/login', (req, res) => {
    res.send(`<h1>Please login to our system</h1>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})