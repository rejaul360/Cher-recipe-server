const express = require('express')
const app = express()
const cors = require('cors');
const port =  process.env.PORT || 3000 ;

app.use(cors())

const chefData = require('./data/chef.json')

app.get('/', (req, res) => {
  res.send('chef recipe hunter website')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})