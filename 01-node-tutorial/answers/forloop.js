function makeFile(numberOfLines){
    console.log(numberOfLines)
    for( let i = 2; i < numberOfLines + 1 ; i++){
        console.log(`Line number ${i} has been written`)
} }

// 1. function call below works and returns 'Line number ${i} has been written'
// makeFile(10)

//2. function call below does not seem to work, as expected, but it does not return any information on the error within the for loop
// makeFile('tuna')