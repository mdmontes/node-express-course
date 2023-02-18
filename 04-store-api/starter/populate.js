require('dotenv').config()
const connectDB = require('./db/connect')
const product = require('./models/product')
const productJson= require('./products.json')

const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(productJson)
    console.log('Success!!!')
    process.exit(0)
  } catch (error) {
    console.log('Error connecting')
    process.exit(1)
  }
}

start()