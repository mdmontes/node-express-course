const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors')

const autheticateToken = async (req,res,next) =>{
  // const authHeader = req.headers['authorization']
  const authHeader = req.headers.authorization
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // res.status(401).json({msg: `No Token Provided`})
    throw new UnauthenticatedError(`No Token Provided`)
  }

  const token = authHeader.split(' ')[1]

  // jwt function uses callback function as seen in WebDev Simplified
  jwt.verify(token, process.env.JWT_SECRET,(error,decoded)=>{
    if (error) {
      // return res.status(403).json({msg: `Token was recognized, but for this user and token, the following resource cannot be provided`})}
      throw new UnauthenticatedError(`Token was recognized, but for this user and token, the following resource cannot be provided`)};
    const {name, id} = decoded 
    req.user = {name, id};
    // console.log(req.user);
    next()
  })
}

module.exports = autheticateToken