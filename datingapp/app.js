const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/about', function (req, res) {
    res.send('doei World!')
  })

  app.get('/', function (req, res) {
    throw new Error('BROKEN') // Express will catch this on its own.
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))