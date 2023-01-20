const express = require('express');
const app = express();
const {products} = require('../data');

//1. Basic express query to display Products Json data on home page
// app.get('/',(req,res)=>{
//     res.json(products)
// });

//2 Basic Express query to display Home Page and a Link to Products,which will take us to '/api/products 
app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
  })

//3 Express query to display SOME JSON data for all products, and not all of the data for that product (i.e, not the 'description')
app.get('/api/products',(req, res)=>{
    const newProducts = products.map((producto)=>{
        const{id, name, image} = producto;
        return{id, name, image}
    })
    res.json(newProducts)
})

//4 Express query to display ALL JSPN data for a 1 product. The definition of SingleProduct will be what we send in response to the request for '/api/products/1
// app.get('/api/products/1', (req,res)=>{
//     // console.log(req)
//     console.log(req.params)
//     const singleProduct =products.find((p)=>p.id===1)
//     res.json(singleProduct)
// })

app.get('/api/products/:anything', (req,res)=>{
    // console.log(req)
    console.log(req.params)
    const {anything} = req.params;
    console.log(anything)
    const singleProduct =products.find((p)=>p.id === Number(anything))
    
    if(!singleProduct){
        return res.status(404, send('Product does not exist'))
    }

    console.log(singleProduct)
    res.json(singleProduct)
})

//5. Express query with more complex request to receive ":anything" and ":reviewID"
app.get('/api/products/:anything/reviews/:reviewId', (req,res)=>{
    console.log(req.params)
    res.send('Hello World')
})


//6 Express query that evaluates if http address has a "query", which would create certain parameters that we would need to search for in our data, and provide a response to if we found them. If no match, you can send a status of 200 with an empty array

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const{busqueda, limite} = req.query
    var listadeproductos =[...products]

    if (busqueda){
        listadeproductos = listadeproductos.filter((producto)=>{
            return producto.name.startsWith(busqueda)
        })
    }

    if(limite){
        listadeproductos = listadeproductos.slice(0, Number(limite))
    }

    if(listadeproductos.length < 1) {
        // res.status(200).send("no encontramos tu producto")
        return res.status(200).json({success: true, data:[]})
    }
    
    res.status(200).json(listadeproductos)
})


app.listen(5000, ()=>{
    console.log('server listening on port 5000...')
})


