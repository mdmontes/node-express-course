const express = require('express');
app = express()

const {myLogger} = require('./final/practicemiddleware.js')

app.use(myLogger)
app.use(express.static('./New-Public'))

app.get('/sample',(req,res)=>{
    res.status(200).send('<h2> This is Working </h2>')
})

app.all('*',(req,res)=>{
    // console.log('user hit the response');
    res.status(404).send('<h3> Resource Not Found </h3>')
})

app.listen(3000, ()=>{
    console.log('Server listing on port 3000')
})