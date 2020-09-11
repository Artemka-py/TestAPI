const express = require('express')

const app = express()

app.use(express.json())

app.post('/api', async (req, res) => {
  if (!req.body) return res.sendStatus(400)
  return res.send({ text: req.query.text })
})

const PORT = 5000

async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started in port ${PORT}`))
  } catch (e) {
    console.log(`Server error ${e.message}`)
    process.exit(1)
  }
}

start()
