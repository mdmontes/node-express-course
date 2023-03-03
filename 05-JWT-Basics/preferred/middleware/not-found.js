const notFound = (req, res) => 
// {console.log('hitting error')
  res.status(404).send('Route does not exist. Check your API base path')

module.exports = notFound
