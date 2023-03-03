const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors')

const logon = async (req, res) => {
  // console.log(req.body)
  const {name, password} = req.body;

  if(!name||!password){
    // res.status(400).json({msg:`Bad request. Make sure you entered a name or password`});
    throw new BadRequestError(`Bad request. Make sure you entered a name or password`)

  };
  
  //just for demo, normally provided by DB!!!!
  const id = Math.floor(Math.random() * 100);
  
  // let searchId = Math.floor(Math.random() * 100);
  // var idDatabase = [];
  // idDatabase.push(searchId);
  // console.log(idDatabase);

  const token = jwt.sign({id, name}, process.env.JWT_SECRET,{expiresIn:'24h',
  })
  
  res.status(200).json({ msg: `user ${name} and ${id} has been created with ${password}`,token:`${token}`});
}

const hello = async(req,res) => {
  // console.log(req.headers.authorization)
  // const token = req.headers.authorization
  // res.status(200).json({msg:`the authorization token ${token} has received, but not decoded`})
  // const { queryid } = req.params
  // const searchIDFound = idDatabase.find(
  //   (query) => query.id === Number(queryid)
  // )
  // console.log(query)

  // if(!searchIDFound){
  //   return res.status(404).send('Search Id could not be found')
  // }

  const {name, id} = req.user
  res.status(200).json({msg:`the authorization was received, check console log, your name should be ${name} and id should be ${id}`})

}

module.exports= {logon, hello}