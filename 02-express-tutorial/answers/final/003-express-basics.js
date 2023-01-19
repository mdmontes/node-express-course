const express = require('express')
const app = express()

// app.get()
// app.post()
// app.put()
// app.delete()
// app.all()
// app.use()
// app.listen()

app.get('/',(req,res)=>{
    // console.log('user hit the response');
    res.status(200).send('<h1> Home Page </h1>')
})

app.get('/about',(req,res)=>{
    // console.log('user hit the response');
    res.status(200).send('<h1> About Page </h1>')
})

app.all('*',(req,res)=>{
    // console.log('user hit the response');
    res.status(400).send('<h1> Resource Not Found </h1>')
})

app.listen(5000, ()=>{
    console.log('server listening on port 5000...')
})


