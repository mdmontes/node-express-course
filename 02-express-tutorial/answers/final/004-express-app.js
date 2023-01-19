const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./Public'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
});

app.all('*',(req,res)=>{
    // console.log('user hit the response');
    res.status(404).send('<h1> Resource Not Found </h1>')
})

app.listen(5000, ()=>{
    console.log('server listening on port 5000...')
})
