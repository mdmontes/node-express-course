const {readFile, writeFile,} = require('fs');
const fromPractice2 = require('./practice2.js')

nombreUsuario = fromPractice2.usuario.username
frase = fromPractice2.sentence

//1. Write file using writeFile and exports from Practice2 module
// writeFile('./content/practice.txt',`The course asks that I send the sentence, which is ${frase}" and the username "${nombreUsuario}"`,(err,) => {
//     if (err){
//         console.log(err)
//         return}})

//2. SELF ADDITIONAL PRACTICE Write file using readFile and Writefile, as well as text generated in operation above
console.log(`start task`)
readFile('./content/practice.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    writeFile('./content/practice1.2.txt',first,(err,result) => {if (err){
        console.log(err)
        return}})
    console.log(`done with this task`)
    
    })
console.log(`starting next task`)