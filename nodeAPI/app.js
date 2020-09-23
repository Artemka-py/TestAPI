const express = require('express')

const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
  console.log('hello')
  return res.send(`Hello world`)
})

app.post('/api/:text', (req, res) => {
  if (!req.params.text) return res.sendStatus(400)
  console.log('artillery')
  data = JSON.stringify(req.params.text)
  data = JSON.parse(data)
  data = JSON.stringify(data)
  data = JSON.parse(data)
  data = JSON.stringify(data)
  return res.send(data)
})

const PORT = 5000

function start() {
  try {
    app.listen(PORT, host)
    console.log(`running on http://localhost:${PORT}`)
  } catch (e) {
    console.log(`Server error ${e.message}`)
    process.exit(1)
  }
}

start()
