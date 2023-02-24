require('dotenv').config()
require('express-async-errors')

const express = require('express');
const app = express()

const connectDB = require('./db/connect')

const notFoundMiddleware = require('../starter/middleware/not-found')
const errorHandlerMiddleware = require('../starter/middleware/error-handler')
const productsRouter = require('./routes/products')

//global middleware
app.use(express.json())

//routes
app.get('/', (req,res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', productsRouter)

//products route

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () =>{
    try {
       //connect DB
       await connectDB(process.env.MONGO_URI)
       app.listen(port, console.log(`Server is listening to port ${port}`)) 
    } catch (error) {
        console.log(error)
    }
}

start()