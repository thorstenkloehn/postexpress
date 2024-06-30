require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT 

app.get('/', (req, res) => {
   const start = {
         id : 1,
         name: 'Hello World',
         adresse : 'Musterstrasse 1'
    };
    res.json({ start })
})

app.listen(port, () => {
    console.log(`Server ist Port ${port}`)
  })