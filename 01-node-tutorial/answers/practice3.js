const {writeFile} = require('fs').promises;

const writeLine = async(i) => {
    if(i>1){
        await writeFile('./content/practice2.txt',`This is line ${i}\n`,{flag:'a'});
    }
    else{
        await writeFile('./content/practice2.txt',`This is the first line\n`);
    }
}

function makeFile(numberOfLines){
    try{
        if(!Number.isInteger(numberOfLines)){
            throw new TypeError(`The function "Makefile" received the value "${numberOfLines}" inside of its parameter.\n The value "${numberOfLines}" is a ${typeof(numberOfLines)}, and it is not an integer.\n Values submitted into the "makeFile" function must be integers.`)
        }else {
            for( let i = 0; i < numberOfLines + 1 ; i++){
            const j =  writeLine(i)
            console.log(`Line number ${i} has been written`)}
        }
    }catch(e){
        console.log(e.message)
    }
} 
//1. To create "practice2.txt" remove comments and run the function below
// makeFile(10)

//2. To test error handling, remove comments and run the function below
makeFile('tuna')