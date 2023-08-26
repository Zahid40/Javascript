const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query.name)
  res.send('Hello World! <br> <a href="/about">about</a> <br> <a href="/help">help</a>')
})
app.get('/about', (req, res) => {
  res.send('about ! <br> <a href="/">home</a> <br> <a href="/help">help</a>')
})
app.get('/help', (req, res) => {
  res.send('Hello help page !  <br> <a href="/about">about</a> <br> <a href="/">home</a>')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})