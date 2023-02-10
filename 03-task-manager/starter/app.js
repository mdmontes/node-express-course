const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const tasks = require('./router/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')


//middleware
// app.use(express.urlencoded({ extended: false }))
// const bodyParser = require('body-parser')
app.use(express.static('./public'))
app.use(express.json())
// app.use(bodyParser.json())

//routes
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks', tasks)
// why is this middleware being used after our responses registered in app.use. ('/api/v1/tasks',tasks)?
app.use(notFound)
app.use(errorHandler)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on ${port}`))   
    }catch(error){
        console.Consolelog(error);
    }
}

start() 
