const {createReadStream} = require('fs')

const corriente = createReadStream('./content/Big-File.txt',
{
    highWaterMark: 90000,
    // encoding: 'utf-8'
})

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

corriente.on('data',(resultado) =>{
    console.log(resultado)
})

corriente.on('error',(error)=>{
    console.log(error)
})
