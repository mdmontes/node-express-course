const express = require('express')
const app = express()
let { people } = require('../../data')

//THE CODE BELOW WITH app.use is ALL MIDDLEWARE
//1) Middleware that allows us to render the static files Index.html and Javascript.htm from the 'Methods-Public' library
app.use(express.static('../../methods-public'))
//2) When we are on the index.html form, and type in a value of 'susan' this middleware code allows us to fetch the value of 'susan' from the form and passe it onto req.body
app.use(express.urlencoded({ extended: false }))
//3) this somehow allows us to grab the form value from javascript.html?
app.use(express.json())


//THE CODE BELOW SHOWS ALL THE RESPONSE METHODS WE USE ONCE WE RECEIVE MIDDLEWARE 
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

//code below demonstrates how app.use(express.urlencoded) uses middleware for us to fetch the value from form (where we type in 'susan) and pass it onto the 'req.body'. we use the INDEX.HMTL Form
app.post('/login', (req, res) => {
//  res.send('POST')
const { nombre } = req.body
if (nombre) {
  return res.status(200).send(`Welcome ${nombre}`)
}
res.status(401).send('Please Provide Credentials')
})

//code below shouws how we can manipulate JAVASCRIPT.HTML so that we add more names to the data object in the JAVASCIRPT HTML file. When we provide a response, the Axios code in the JAVASCRIPT HTML file somehow updates the list of names
app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

//copy & paste the link into Postman and use Postman. Type into the 'body' in json format {"name": "Manny"}
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

//displays how to use postman, where the link will need to use a '1' or '2' in place of the ':id'. The function below will take those numbers as parameters and save them in the variable id. Typing the name 'manny' into the body in postman will then be saved in the variable name. Then we console log the result
// app.put('/api/people/:id', (req, res) => {
//   const { id } = req.params
//   const { name } = req.body
//   console.log(id, name)
//   res.status(200).send('Hello World')
// })

//identifies a person with specific id, and replaces the existing name with a new name
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  //finds the existing person within people with id from paramenter and saves it to variable 'person'
  const person = people.find((person) => person.id === Number(id))

  //checks if person was found, else error
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }

//pass the variable 'person' from above, if that person's id = to id from paramenters, then name is replaced with name from 'body'
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

//returns data after deleting data based on the parameter id
app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
