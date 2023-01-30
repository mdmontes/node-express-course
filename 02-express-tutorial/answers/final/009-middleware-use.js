const express = require('express')
const app = express()
const logger = require('../logger')
const authorize = require('../authorize')

//  req => middleware => res

// the two app.get below would entail having to copy the variable 'logger' before the (req,res) each time for every get request. Instead, we are doing to use app.use(logger)
// app.get('/', logger, (req, res) => {
//   res.send('Home')
// })
// app.get('/about', logger, (req, res) => {
//   res.send('About')
// })

app.use([logger, authorize])

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
