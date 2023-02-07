const mongoose = require('mongoose')


const connectDB = (url) =>{
    return mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB
// commented out in order to refactor code and have 'CONNECTED TO THE DB FIRST'
// .then(() => console.log('CONNECTED TO THE DB...'))
// .catch((err) => console.log(err))