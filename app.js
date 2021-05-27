const express = require('express');
const db = require('./database');
const users = require('./users');
const cors = require('cors');
const app = express()
const port = 3000
app.use(express.json());
app.use(cors());




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send(users);
  })

  app.get('/user', (req, res) => {
    res.send(db);
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})